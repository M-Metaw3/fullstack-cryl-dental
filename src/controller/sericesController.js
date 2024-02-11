const factory = require('../Factory/Factory');
const {uploadMixOfImages} = require("../utils/imageUpload");
const asyncHandler = require('./../utils/catchAsync');
const services = require('../models/servicesModel');
const sharp = require('sharp');
const path = require('path');







//__________IMAGES_HANDLER__________//
// 1) UPLOADING(Multer)
exports.uploadProductImages = uploadMixOfImages([
    {name: "imageCover", maxCount: 1},
    {name: "images", maxCount: 4},
  ]);
  
  exports.resizeProductImages = asyncHandler(async (req, res, next) => {
    console.log(req.files.images)
    if (!req.files) return next();


 

    // a) image field
    if (req.files.imageCover) {
      const mainImageFilename = `imageCover-${req.files.imageCover[0].originalname}-${Date.now()}-main.jpeg`;
      await sharp(req.files.imageCover[0].buffer)
        .resize(2000, 1333)
        .toFormat("jpeg")
        .jpeg({quality: 100})
        .toFile(
          path.join(__dirname,`../images/services/${mainImageFilename}`)
        );
      // put it in req.body to access it when we access createProduct, updateSingleProduct to save the filename into database
      req.body.imageCover = mainImageFilename;
 console.log( path.join(__dirname,`../images/services/${mainImageFilename}`));

    }
    // b) sliderImages field

  // b) sliderImages field
  if (req.files.images) {
    req.body.images = [];
    await Promise.all(
      req.files.images.map(async (img, idx) => {
        const sliderImageName = `image-${Date.now()}-slide-${
          idx + 1
        }.jpeg`;

        await sharp(img.buffer)
          .resize(800, 800)
          .toFormat("jpeg")
          .jpeg({quality: 90})
          .toFile(
            // `../server/uploads/products/${sliderImageName}`

          path.join(__dirname,`../images/services/${sliderImageName}`)

          );

        // put it in req.body to access it when we access createProduct, updateSingleProduct to save the filename into database
        req.body.images.push(sliderImageName);
      })
    );
  }

  next();
  });
  exports.createServices = factory.createOne(services);
  exports.getallservices = factory.getAll(services);
  exports.getone = factory.getOne(services);

  exports.updateOne = factory.updateOne(services)
  exports.deleteOne = factory.deleteOne(services)


