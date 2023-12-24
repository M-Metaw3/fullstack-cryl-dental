const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const Serviceschema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, 'A Services must have a name'],
        unique: true,
        trim: true,
        maxlength: [40, 'A Services name must have less or equal then 40 characters'],
        minlength: [10, 'A Services name must have more or equal then 10 characters']
      },

      ratingsAverage: {
        type: Number,
        default: 4.5,
        min: [1, 'Rating must be above 1.0'],
        max: [5, 'Rating must be below 5.0'],
        set: val => Math.round(val * 10) / 10 // 4.666666, 46.6666, 47, 4.7
      },
      ratingsQuantity: {
        type: Number,
        default: 0
      },
      price: {
        type: Number,
        required: [true, 'A Services must have a price']
      },
      priceDiscount: {
        type: Number,
        validate: {
          validator: function(val) {
            // this only points to current doc on NEW document creation
            return val < this.price;
          },
          message: 'Discount price ({VALUE}) should be below regular price'
        }
      },
      description: {
        type: String,
        trim: true
      },
      imageCover: {
        type: String,
        required: [true, 'A tour must have a cover image']
      },
      images: [String],
      createdAt: {
        type: Date,
        default: Date.now(),
        select: false
      },

    },
    {
      toJSON: { virtuals: true },
      toObject: { virtuals: true },
      timestamps:true
    }
  );

  const Services = mongoose.model('Services', Serviceschema);

module.exports = Services;
