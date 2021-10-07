const router = require('express').Router()
const textController = require('../controllers/textControllers')

router.post('/', textController.text)

module.exports = router