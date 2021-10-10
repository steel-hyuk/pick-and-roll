const { User } = require('../models')
const { Recipe } = require('../models')
const { TasteScore } = require('../models')
const { EasyScore } = require('../models')
const { Favorite } = require('../models')
const {
  generateAccessToken,
  generateRefreshToken,
  sendAccessToken,
  resendAccessToken,
  sendRefreshToken,
  isAuthorized,
  checkRefeshToken,
} = require('../controllers/token/tokenController')
const { everyScoreSum } = require('../controllers/function/function')

module.exports = {
  signUp: (req, res, next) => {
    const { email, nickname, password, description } = req.body
    if (!email || !nickname || !password || !description) {
      res
        .status(422)
        .send({ message: '회원가입에 필요한 정보를 모두 입력하세요!' })
    }
    User.findOrCreate({
      where: {
        email: email,
        nickname: nickname,
        password: password,
        description: description
      },
    })
      .then(([data, created]) => {
        if (!created) {
          res
            .status(409)
            .send({ data: null, message: '동일한 이메일이 존재합니다!' })
        }
        res
          .status(201)
          .send({ message: '회원가입이 성곡적으로 이루어졌습니다!' })
      })
      .catch((err) => {
        console.log('signUp accessToken error!')
        next(err)
      })
  },
  signIn: (req, res, next) => {
    const { email, password } = req.body
    User.findOne({
      where: { email, password }
    })
      .then((user) => {
        if (!user) {
          return res
            .status(404)
            .send({ data: null, message: '사용자를 찾을 수 없습니다!' })
        }
        let userData = user.dataValues
        delete userData.password
        const accessToken = generateAccessToken(userData)
        const refreshToken = generateRefreshToken(userData)
        sendRefreshToken(res, refreshToken) //access보다 위에 있어야 한다
        sendAccessToken(res, accessToken, userData)
      })
      .catch((err) => {
        console.log('SignIn Error!')
        next(err)
      })
  },
  logOut: (req, res, next) => {
    try {
      res.cookie('jwt', '', { maxAge: 0 })
      res.status(205).send({ message: 'Logged out successfully' })
    } catch (err) {
      console.log('logout error!')
      next(err)
    }
  },
  isAuth: async (req, res, next) => {
    const accessTokenData = isAuthorized(req)
    const refreshToken = req.cookies.jwt
    if (!accessTokenData) {
      if (!refreshToken) {
        res.status(403).send({
          message:
            "refresh token does not exist, you've never logged in before"
        })
      }
      const refreshTokenData = checkRefeshToken(refreshToken)
      if (!refreshTokenData) {
        res.json({
          data: null,
          message: 'invalid refresh token, please log in again'
        })
      }
      const { email } = refreshTokenData
      let findUser = await User.findOne({ where: { email } })
      if (!findUser) {
        res.json({
          data: null,
          message: 'refresh token has been tempered'
        })
      }
      delete findUser.dataValues.password

      const newAccessToken = generateAccessToken(findUser.dataValues)
      resendAccessToken(res, newAccessToken, findUser.dataValues)
    }
    const { email } = accessTokenData
    User.findOne({
      where: { email },
    })
      .then((user) => {
        let userData = user.dataValues
        delete userData.password
        res.send({ userData })
      })
      .catch((err) => {
        console.log('isAuth error!')
        next(err)
      })
  },
  update: async (req, res, next) => {
    let userId = res.locals.userId
    let message = res.locals.message
    let token = res.locals.isAuth
    //사용자의 가입시 입력한 email은 수정 할 수 없습니다!
    userParams = {
      nickname: req.body.nickname,
      description: req.body.description
    }

    User.update(userParams, {
      where: { id: userId }
    })
      .then(async () => {
        let updatedData = await User.findOne({ where: { id: userId } })
        let userData = updatedData.dataValues
        delete userData.password
        if (message === 'Auth Ok!') res.send({ userData })
        else res.send({ token, userData })
      })
      .catch((err) => {
        console.log('mypage update error!')
        next(err)
      })
  },
  passwordCheck: async (req, res, next) => {
    try {
      let userId = res.locals.userId
      delete res.locals.isAuth
      let findData = await User.findOne({ where: { id: userId } })
      let userData = findData.dataValues

      if (userData.password !== req.body.password) {
        res.status(404).send({ message: false })
      } else if (userData.password === req.body.password) {
        res.send({ message: true })
      }
    } catch (err) {
      console.log('비밀번호 확인 오류')
      next(err)
    }
  },
  passwordChange: async (req, res, next) => {
    try {
      let userId = res.locals.userId
      delete res.locals.isAuth
      await User.update(
        { password: req.body.password },
        { where: { id: userId } }
      )
      res.send({ message: '변경이 완료되었습니다' })
    } catch (err) {
      console.log('비밀번호 변경 오류')
      next(err)
    }
  },
  myRecipe: async (req, res, next) => {
    let userId = res.locals.userId
    User.findAll({
      include: [
        {
          model: Recipe,
          attributes: ['id', 'title', 'introduction', 'category', 'createdAt']
        },
      ],
      where: { id: userId }
    })
      .then(async (info) => {
        let Data = await Promise.all(
          info[0].Recipes.map(async (el) => {
            let value = await Recipe.findOne({
              include: [
                { model: TasteScore, attributes: ['score'] },
                { model: EasyScore, attributes: ['score'] }
              ],
              where: { id: el.id }
            })

            let tasteNum = value.TasteScores.length
            let tasteAvg =
              tasteNum === 0 ? 0 : everyScoreSum(value.TasteScores) / tasteNum
            let easyNum = value.EasyScores.length
            let easyAvg =
              easyNum === 0 ? 0 : everyScoreSum(value.EasyScores) / easyNum

            const {
              id,
              title,
              introduction,
              category,
              createdAt,
              mainImg
            } = value

            return {
              id,
              title,
              mainImg,
              introduction,
              category,
              tasteAvg: tasteAvg.toFixed(2),
              easyAvg: easyAvg.toFixed(2),
              createdAt
            }
          })
        )
        if (Data.length === 0) {
          res.status(200).send('작성한 레시피가 없습니다!')
        }
        res.send(Data)
      })
      .catch((err) => {
        console.log('myRecipe posts error!')
        next(err)
      })
  },
  favorite: (req, res, next) => {
    let userId = res.locals.userId
    User.findAll({
      include: [{ model: Favorite, attributes: ['recipeId'] }],
      where: { id: userId }
    })
      .then(async (info) => {
        let Data = await Promise.all(
          info[0].Favorites.map(async (el) => {
            let value = await Recipe.findOne({
              include: [
                { model: TasteScore, attributes: ['score'] },
                { model: EasyScore, attributes: ['score'] },
              ],
              where: { id: el.recipeId },
            })

            let tasteNum = value.TasteScores.length
            let tasteAvg =
              tasteNum === 0 ? 0 : everyScoreSum(value.TasteScores) / tasteNum
            let easyNum = value.EasyScores.length
            let easyAvg =
              easyNum === 0 ? 0 : everyScoreSum(value.EasyScores) / easyNum

            const {
              id,
              title,
              introduction,
              category,
              createdAt,
              updatedAt,
              mainImg,
            } = value

            return {
              id,
              title,
              mainImg,
              introduction,
              category,
              tasteAvg: tasteAvg.toFixed(2),
              easyAvg: easyAvg.toFixed(2),
              createdAt,
              updatedAt
            }
          })
        )
        if (Data.length === 0)
          res.status(200).send({ message: '즐겨찾기 레시피가 없습니다!' })
        res.send(Data)
      })
      .catch((err) => {
        console.log('favorite posts error!')
        next(err)
      })
  },
  addFavorite: (req, res, next) => {
    let recipeId = req.params.recipesId
    let userId = res.locals.userId
    Favorite.findOrCreate({
      where: {
        userId: userId,
        recipeId: recipeId,
      }
    })
      .then(([data, created]) => {
        if (!created) {
          res.status(409).send({ message: '이미 등록 된 즐겨찾기입니다!' })
        }
        res.status(201).send(data)
      })
      .catch((err) => {
        console.log('Favorite Add Error!')
        next(err)
      })
  },
  deleteFavorite: (req, res, next) => {
    let recipeId = req.params.recipesId
    let userId = res.locals.userId
    Favorite.destroy({
      where: {
        userId: userId,
        recipeId: recipeId,
      }
    })
      .then(() => {
        res.status(200).send({ message: '즐겨찾기가 성공적으로 삭제됐습니다!' })
      })
      .catch((err) => {
        console.log('Favorite Delete Error!')
        next(err)
      })
  },
}
