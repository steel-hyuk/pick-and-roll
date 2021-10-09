const router = require('express').Router()
const recipesController = require('../controllers/recipesController')
const auth = require('../controllers/function/function')

router.post('/', recipesController.write)
router.get('/', /*auth.isAuth,*/ recipesController.findByQuery)

module.exports = router
