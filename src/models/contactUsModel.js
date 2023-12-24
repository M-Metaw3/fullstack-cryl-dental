const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      lowercase: true,

    },
    phone: {
      type: String,
    },
    message: {
      type: String,
      maxlength: [1000, 'Message cannot be longer than 1000 characters'],
    },
    company: String,
  },
  {
    timestamps: true,
  }
);

const ContactUs = mongoose.model('ContactUs', contactUsSchema);

module.exports = ContactUs;