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
  checkRefeshToken
} = require('../controllers/token/tokenController')
const { everyScoreSum } = require('../controllers/function/function')

module.exports = {
    signUp: (req, res, next) => {
        const { email, name, password, description } = req.body
        if (!email || !name || !password || !description) {
          res
            .status(422)
            .send({ message: '회원가입에 필요한 정보를 모두 입력하세요!' })
        }
        User.findOrCreate({
          where: {
            email: email,
            name: name,
            password: password,
            description: description
          }
        })
          .then(([data, created]) => {
            if (!created) {
              res.status(409).send({ data: null, message: '동일한 이메일이 존재합니다!' })
            }
            res.status(201).send({ message: '회원가입이 성곡적으로 이루어졌습니다!' })
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
              return res.status(404).send({ data: null, message: '사용자를 찾을 수 없습니다!' })
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
            res
              .status(403)
              .send({ message: "refresh token does not exist, you've never logged in before" })
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
          where: { email }
        })
          .then((user) => {
            let userData = user.dataValues
            delete userData.password
            res.send({userData})
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
              let updatedData = await User.findOne({ where: {id: userId}})
              let userData = updatedData.dataValues
              delete userData.password              
              if(message === 'Auth Ok!') res.send({userData})
              else res.send({token, userData})
              
          })
          .catch((err) => {
            console.log('mypage update error!')
            next(err)
          })
      },
      passwordCheck: async (req, res, next) => {
        let userId = res.locals.userId
        let message = res.locals.message
        let token = res.locals.isAuth
        let findData = await User.findOne({ where: {id: userId}})
        let userData = findData.dataValues
        console.log(userData)
        if(Number(userData.password) !== req.body.password) {
            res.status(404).send({ message: '비밀번호가 일치하지 않습니다!'})
        } else if (Number(userData.password)  === req.body.password) {
            res.send({ message: true })
        }
      }
}