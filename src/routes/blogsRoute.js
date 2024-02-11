const router=require('express').Router();
const blog = require('../controller/blogsController');
const multer = require('multer');
const path =require('path');
const fs = require('fs');
const auth = require('../controller/authController');









router.post('/',blog.uploadBannerImage,blog.resizeBannerImage,blog.createBlog);
router.get('/',blog.getallBlog);
router.delete('/:id',blog.deleteone);
router.put('/:id',blog.edit);






module.exports = router;
