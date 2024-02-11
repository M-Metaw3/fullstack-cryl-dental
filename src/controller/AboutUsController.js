const factory = require('../Factory/Factory');
const {uploadSingleImage} = require("../utils/imageUpload");
const asyncHandler = require('./../utils/catchAsync');
const AboutUs = require('../models/AboutUs');
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
    
    path.join(__dirname,`../images/AboutUs/${filename}`)
    
    );
    console.log(req.file)

  // put it in req.body to access it when we access createBanner ,updateSingleBanner to save the filename into database
  req.body.images = filename;
  req.body.path = path.join(__dirname,`../images/AboutUs/${filename}`);

  next();
});


exports.createaboutus = factory.createOne(AboutUs);
exports.getallaboutus= factory.getAll(AboutUs);
exports.delete1= factory.deleteOne(AboutUs);

