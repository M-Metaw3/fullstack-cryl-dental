const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: [true, 'Please provide a name'],
      enum:['accepted','rejected'],
      default:"rejected"
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      lowercase: true,
    },
    designfile: {
      type: String,
      trim: true,
      required: [true, 'Please provide an email'],
    },
    filedescription: {
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