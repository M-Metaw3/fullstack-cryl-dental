const express = require('express');
// const multer = require('multer');
const services = require('../controller/sericesController');

const router = express.Router();
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, path.join(__dirname,'../public'))
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
   
//     },
//   }
//   );
  
//   var upload = multer({ storage: storage }).single('image');


router.post('/',services.uploadProductImages,services.resizeProductImages,services.createServices);
router.put('/:id',services.uploadProductImages,services.resizeProductImages,services.updateOne);

router.get('/',services.getallservices);
router.delete('/:id',services.deleteOne);
router.get('/:id',services.getone);



// router.get('/services', getServices);
// router.get('/services/:id', getService);
// router.put('/services/:id', updateService);
// router.delete('/services/:id', deleteService);

module.exports = router;