const factory = require('../Factory/Factory');
const {uploadSingleImage} = require("../utils/imageUpload");
const asyncHandler = require('./../utils/catchAsync');
const HomePage = require('../models/HomeModel');
const sharp = require('sharp');
const path = require('path');






// 1) UPLOADING(Multer)
exports.uploadBannerImage = uploadSingleImage("images");

// 2) PROCESSING(Sharp)
 exports.resizeBannerImage = asyncHandler(async (req, res, next) => {
    
  if (!req.file) return next();
  // console.log(req.file);

  const filename = `imageHome-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
  
    .resize(1920, 784)
    .toFormat("jpeg")
    .jpeg({quality: 100})
    .toFile(
    
    path.join(__dirname,`../images/HomePage/${filename}`)
    
    );
    console.log(req.file)

  // put it in req.body to access it when we access createBanner ,updateSingleBanner to save the filename into database
  req.body.images = filename;
  req.body.path = path.join(__dirname,`../images/HomePage/${filename}`);

  next();
});

  exports.createOne = factory.createOne(HomePage);
  exports.getall = factory.getAll(HomePage);
  exports.deleteone = factory.deleteOne(HomePage);
  exports.updateone = factory.updateOne(HomePage);



  