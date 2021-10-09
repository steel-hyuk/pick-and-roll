const sequelize = require('sequelize')
const { Recipe, TasteScore, EasyScore, Comment, User } = require('../models')
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
    let pageNum = Number(req.query.offset)
    let offset = 0
    let limit = Number(req.query.limit)
    let recipeNum = req.query.id
    if (pageNum > 1) offset = limit * (pageNum - 1)

    //* 메인페이지에서 카테고리별, 분류별 데이터를 담당합니다 *//
    if (category && division && offset !== undefined && limit !== undefined) {
      let categorySort
      let result
      //* 최신순 정렬 *//
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
        //* 맛, 편리성 정렬 *//
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
        let avgAdd = await Promise.all(
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
        let sortAvg = avgAdd.sort((a, b) => {
          if (division === 'taste') return b.tasteAvg - a.tasteAvg
          else if (division === 'easy') return b.easyAvg - a.easyAvg
        })
        let newArr = []
        console.log(offset, limit)
        for (let n = offset; n < offset + limit; n++) {
          if (sortAvg[n]) newArr.push(sortAvg[n])
        }
        result = newArr
      }
    } else if (searchName && offset !== undefined && limit !== undefined) {
      //* 검색어 정렬 *//
      let searchData = await Recipe.findAll({
        offset: Number(offset),
        limit: Number(limit),
        include: [
          { model: TasteScore, attributes: ['score'] },
          { model: EasyScore, attributes: ['score'] },
        ],
        where: {
          title: {
            [sequelize.Op.like]: '%' + searchName + '%',
          },
        },
      })

      let addAvg = await Promise.all(
        searchData.map(async (el) => {
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

      let newArr = []
      for (let n = offset; n < offset + limit; n++) {
        if (addAvg[n]) newArr.push(addAvg[n])
      }
      result = newArr
    } else if (recipeNum) {
      let recipeData = await Recipe.findOne({
        include: [
          { model: TasteScore, attributes: ['score'] },
          { model: EasyScore, attributes: ['score'] },
          {
            model: Comment,
            attributes: ['id', 'content', 'createdAt', 'userId'],
          },
        ],
        where: { id: recipeNum },
      })
      console.log(recipeData)
      let tasteNum = recipeData.dataValues.TasteScores.length
      let tasteAvg = tasteNum === 0 ? 0 : everyScoreSum(recipeData.dataValues.TasteScores) / tasteNum
      let easyNum = recipeData.dataValues.EasyScores.length
      let easyAvg = easyNum === 0 ? 0 : everyScoreSum(recipeData.dataValues.EasyScores) / easyNum
      let seperateWords = recipeData.dataValues.content.split('@')
      let isMyPost = false
      let isMyFavorite = false
      //사용자 처리하면 다시 여기도 추가요

      const {
        id,
        userId,
        title,
        introduction,
        category,
        requiredTime,
        createdAt,
        updatedAt,
        mainImg,
        contentImg,
        ingredients,
        Comments
      } = recipeData

      let commentData = await Promise.all(
        Comments.map(async (el) => {
          let value = await User.findOne({
            where: { id: el.userId }
          })
          let newObj = { name: value.name }
          let result = { ...el.dataValues, ...newObj }

          return result
        })
      )

       result = {
         id,
         userId,
         title,
         introduction,
         category,
         requiredTime,
         content: seperateWords,
         createdAt,
         updatedAt,
         tasteAvg: tasteAvg.toFixed(2),
         easyAvg: easyAvg.toFixed(2),
         mainImg,
         contentImg,
         ingredients,
         commentData
       }
    }
    res.send(result)
  },
  update: (req, res, next) => {
        
  }
}
