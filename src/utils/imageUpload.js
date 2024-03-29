const multer = require('multer');
const sharp = require('sharp');



const APIError = require("./ApiError");

const multerOptions = () => {
  //STORAGE
  //@desc Store files in memory as Buffer objects, to do some image processing with sharp package
  const multerStorage = multer.memoryStorage();

  //FILTER
  //@desc In this app we need to upload images only
  const multerFilter = (req, file, cb) => {
    // console.log(file);

    // cb Its like the next() in express to handle errors
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
      cb(new APIError("Please upload only images", 400), false);
    }
  };
  const upload = multer({storage: multerStorage, fileFilter: multerFilter});
  return upload;
};

exports.uploadSingleImage = (fieldName) =>
  multerOptions().single(fieldName);

  exports.uploadMixOfImages = (arrayOfFields) =>
  multerOptions().fields(arrayOfFields);
