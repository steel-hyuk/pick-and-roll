const router = require('express').Router()
const userController = require('../controllers/usersController')
const auth = require('../controllers/function/function')

router.get('/', userController.isAuth)
router.patch('/', auth.isAuth, userController.update)
router.post('/signup', userController.signUp)
router.post('/signin', userController.signIn)
router.post('/logout', userController.logOut)
router.post('/security', auth.isAuth, userController.passwordCheck)
router.patch('/security')
router.get('/myrecipe')
router.get('/favorite')
router.post('/favorite/:recipesId')
router.delete('favorite/:recipesId')

module.exports = router