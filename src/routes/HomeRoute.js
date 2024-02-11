const express = require('express');
// const multer = require('multer');
const HomePage = require('../controller/HomePageController');

const router = express.Router();
router.post('/',HomePage.uploadBannerImage,HomePage.resizeBannerImage,HomePage.createOne);
router.get('/',HomePage.getall);
router.delete('/:id',HomePage.deleteone);
router.put('/:id',
HomePage.uploadBannerImage,HomePage.resizeBannerImage,
HomePage.updateone);



module.exports = router;

