const express = require('express');
const multer = require('multer');
const {
  createService,
  getServices,
  getService,
  updateService,
  deleteService,
} = require('../controller/servicesController');

const router = express.Router();
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../public'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
   
    },
  }
  );
  
  var upload = multer({ storage: storage }).single('image');


router.post('/',upload,createService);
router.get('/services', getServices);
router.get('/services/:id', getService);
router.put('/services/:id', updateService);
router.delete('/services/:id', deleteService);

module.exports = router;