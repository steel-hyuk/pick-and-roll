const router = require('express').Router()
const recipesController = require('../controllers/recipesController')
const auth = require('../controllers/function/function')

router.post('/', auth.isAuth ,recipesController.write)
router.get('/', recipesController.findByQuery)
router.patch('/:recipesId', recipesController.update)

module.exports = router
