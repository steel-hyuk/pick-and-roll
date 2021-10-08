const router = require('express').Router()
const homeController = require('../controllers/homeControllers')

router.get('/', homeController.main)

module.exports = router