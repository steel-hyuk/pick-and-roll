const { Recipe, TasteScore, EasyScore, Comment } = require('../models')
const { isAuthorized } = require('../controllers/token/tokenController')
const { everyScoreSum } = require('../controllers/function/function')

module.exports = {
  write: async (req, res, next) => {
    let userParams = `{
      "title": "${req.body.title}",
      "introduction": "${req.body.introduction}",
      "mainImg": "${req.body.mainImg}",
      "category": "${req.body.category}",
      "requiredTime": "${req.body.requiredTime}",
      "ingredients": "${req.body.ingredients}",
      "content": "${req.body.content}",
      "contentImg": "${req.body.contentImg}",
      "userId": "${res.locals.id}"        
  }` //res.locals.id 바꿔줘야함

    let postData = JSON.parse(userParams)
    const {
      title,
      introduction,
      mainImg,
      category,
      requiredTime,
      ingredients,
      content,
      contentImg,
      userId,
    } = postData

    Recipe.findOrCreate({
      where: {
        title,
        introduction,
        mainImg,
        category,
        requiredTime,
        ingredients,
        content,
        contentImg,
        userId,
      },
    })
      .then(async ([data, created]) => {
        if (created) {
          const postId = data.dataValues.id
          let accessToken = res.locals.isAuthorized

          res.locals.message === 'Auth Ok!'
            ? res.status(201).send({ id: postId })
            : res.status(201).send({ accessToken, id: postId })
        }
      })
      .catch((err) => {
        console.log('Write post Error!')
        next(err)
      })
  },
  findByQuery: async (req, res, next) => {
    let category = req.query.category
    let division = req.query.division
    let searchName = req.query.searchName
    let pageNum = req.query.offset
    let offset = 0
    let limit = req.query.limit
    let id = req.query.id
    if(pageNum > 1) offset = limit * (pageNum - 1) 
    //카테고리별로 먼저 나눈 뒤 => 정렬항목으로 나누기 => 페이지네이션

    if (category && division && offset !== undefined && limit !== undefined) {
      let categorySort
      let result
      //최신순 정렬일때
      if (division === 'createdAt') {
        categorySort = await Recipe.findAll(
          category === 'all'
            ? {
                offset: Number(offset),
                limit: Number(limit),
                include: [
                  { model: TasteScore, attributes: ['score'] },
                  { model: EasyScore, attributes: ['score'] },
                ],
                order: ['createdAt'],
              }
            : {
                offset: Number(offset),
                limit: Number(limit),
                include: [
                  { model: TasteScore, attributes: ['score'] },
                  { model: EasyScore, attributes: ['score'] },
                ],
                order: ['createdAt'],
                where: { category: category },
              }
        )
        result = await Promise.all(
          categorySort.map(async (el) => {
            let tasteNum = el.TasteScores.length
            let tasteAvg =
              tasteNum === 0 ? 0 : everyScoreSum(el.TasteScores) / tasteNum
            let easyNum = el.EasyScores.length
            let easyAvg =
              easyNum === 0 ? 0 : everyScoreSum(el.EasyScores) / easyNum
            const {
              id,
              title,
              mainImg,
              introduction,
              category,
              createdAt,
              updatedAt,
            } = el
            return {
              id,
              title,
              mainImg,
              introduction,
              category,
              tasteAvg: tasteAvg.toFixed(2),
              easyAvg: easyAvg.toFixed(2),
              createdAt,
              updatedAt,
            }
          })
        )
      } else if (division === 'taste' || division === 'easy') {
        categorySort = await Recipe.findAll(
          category === 'all'
            ? {
                include: [
                  { model: TasteScore, attributes: ['score'] },
                  { model: EasyScore, attributes: ['score'] },
                ],
                order: ['createdAt'],
              }
            : {
                include: [
                  { model: TasteScore, attributes: ['score'] },
                  { model: EasyScore, attributes: ['score'] },
                ],
                order: ['createdAt'],
                where: { category: category },
              }          
        )        
      }
      res.send(categorySort)
      //res.send(result)
    }
  },
}
