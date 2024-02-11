const express = require('express');
// const services = require('../controller/sericesController');
const router = express.Router();
const aboutus = require('../controller/AboutUsController');









router.post('/',aboutus.uploadBannerImage,aboutus.resizeBannerImage,aboutus.createaboutus);
router.get('/',aboutus.getallaboutus);
router.delete('/:id',aboutus.delete1);





module.exports = router;