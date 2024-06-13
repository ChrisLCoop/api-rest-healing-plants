const express = require('express')
const router = express.Router();
const indexController = require('../controllers/indexController.js')
const uploadfile = require('../../middleware/multer.js')

router.get('/',indexController.inicio)
router.get('/add-plants',indexController.pageAddItem)
router.get('/galery',indexController.imgItem)

router.post('/add-new-item',indexController.addItem)

router.post('/upload-img',uploadfile(),indexController.uploadAvatarPlants)

module.exports = router