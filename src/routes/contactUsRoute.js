const express = require('express');
const {
  createContactMessage,
  getContactMessages,
  deleteContactMessage,
} = require('../controller/contactUsController');

const router = express.Router();

router.post('/contact', createContactMessage);
router.get('/contact', getContactMessages);
router.delete('/contact/:id', deleteContactMessage);

module.exports = router;