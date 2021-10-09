const router = require('express').Router()
const userController = require('../controllers/usersController')
const auth = require('../controllers/function/function')

router.get('/', userController.isAuth)
router.patch('/', auth.isAuth, userController.update)
router.post('/signup', userController.signUp)
router.post('/signin', userController.signIn)
router.post('/logout', userController.logOut)
router.post('/security', auth.isAuth, userController.passwordCheck)
router.patch('/security', auth.isAuth, userController.passwordChange)
router.get('/myrecipe', auth.isAuth, userController.myRecipe)
router.get('/favorite', auth.isAuth, userController.favorite)
router.post('/favorite/:recipesId', auth.isAuth, userController.addFavorite)
router.delete('/favorite/:recipesId', auth.isAuth, userController.deleteFavorite)

module.exports = router