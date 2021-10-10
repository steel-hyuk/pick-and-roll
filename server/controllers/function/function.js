const {
    isAuthorized,
    checkRefeshToken,
    generateAccessToken
  } = require('../token/tokenController')
  const { User } = require('../../models')
  
  module.exports = {
    everyScoreSum: (arr) => {
      let sum = 0
      arr.map((el) => (sum += el.dataValues.score))
      return sum
    },
    isAuth: async (req, res, next) => {
      const accessTokenData = isAuthorized(req)
      const refreshToken = req.cookies.jwt
      if (!accessTokenData) {
        if (!refreshToken) {
          return res
            .status(403)
            .send({ message: '로그인이 필요한 권한입니다.'})
        }
        const refreshTokenData = checkRefeshToken(refreshToken)
        if (!refreshTokenData) {
          return res.status(401).send({
            data: null,
            message: '권한이 확인되지 않습니다. 다시 로그인해주세요'
          })
        }
        const { email } = refreshTokenData
        let findUser = await User.findOne({ where: { email } })
        if (!findUser) {
          return res.status(401).send({
            data: null,
            message: 'refresh token has been tempered'
          })
        }
        delete findUser.dataValues.password
  
        const newAccessToken = generateAccessToken(findUser.dataValues)
        res.locals.isAuth = newAccessToken
        res.locals.userId = findUser.dataValues.id
        res.locals.message = 'newAccessToken'
        next()
      }
      const { email } = accessTokenData
      let findUser = await User.findOne({
        where: { email }
      })
      if (!!findUser) {
        res.locals.userId  = findUser.dataValues.id
        res.locals.message = 'Auth Ok!'
      }
      next()
    }
  }
  