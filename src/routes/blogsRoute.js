const router=require('express').Router();
const blog = require('../controller/blogsController');
const multer = require('multer');
const path =require('path');
const fs = require('fs');




var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,'../images'))
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
 
  },
}
);

var upload = multer({ storage: storage }).single('image');



router.post('/addblog', upload
,blog.postblog);

// router.post('/comment/:id',auth.isUser, blog.comment);
// router.get('/', blog.getblog);
// router.get('/:id', blog.getoneblog);

// router.delete('/:id',auth.isAdmin, blog.deleteplog);


module.exports = router;
