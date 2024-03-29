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

module.exports = ContactUs;const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  service: {
    type: mongoose.Schema.ObjectId,
    ref: 'servicesModel',
    required: [true, 'Booking must belong to a Services!']
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'userModel',
    required: [true, 'Booking must belong to a User!']
  },
  price: {
    type: Number,
    require: [true, 'Booking must have a price.']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  paid: {
    type: Boolean,
    default: true
  }
});

bookingSchema.pre(/^find/, function(next) {
  this.populate('user').populate({
    path: 'service',
    select: 'name'
  });
  next();
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;