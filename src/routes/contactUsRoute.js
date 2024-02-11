const express = require('express');
const {
  createContactMessage,
  getContactMessages,
  deleteContactMessage,
  deleteAll
} = require('../controller/contactUsController');

const router = express.Router();

router.post('/contact', createContactMessage);
router.get('/contact', getContactMessages);
// router.delete('/contact/:id', deleteContactMessage);
router.delete('/deleteAll', deleteAll);


module.exports = router;