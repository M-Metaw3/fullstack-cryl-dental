const factory = require('../Factory/Factory');
const {uploadSingleImage} = require("../utils/imageUpload");
const asyncHandler = require('./../utils/catchAsync');
const {Blog} = require('../models/blogsModule');
const sharp = require('sharp');
const path = require('path');






// 1) UPLOADING(Multer)
exports.uploadBannerImage = uploadSingleImage("images");

// 2) PROCESSING(Sharp)
 exports.resizeBannerImage = asyncHandler(async (req, res, next) => {
    console.log(req.file)
  if (!req.file) return next();
  // console.log(req.file);

  const filename = `imageHome-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
  
    .resize(1920, 784)
    .toFormat("jpeg")
    .jpeg({quality: 100})
    .toFile(
    
    path.join(__dirname,`../images/Blogs/${filename}`)
    
    );
    console.log(req.file)

  // put it in req.body to access it when we access createBanner ,updateSingleBanner to save the filename into database
  req.body.images = filename;
  req.body.path = path.join(__dirname,`../images/Blogs/${filename}`);

  next();
});


exports.createBlog = factory.createOne(Blog);
exports.getallBlog= factory.getAll(Blog);
exports.deleteone= factory.deleteOne(Blog);
exports.edit= factory.updateOne(Blog);



