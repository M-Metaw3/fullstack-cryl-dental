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
        // maxlength: [40, 'A Services name must have less or equal then 40 characters'],
        // minlength: [10, 'A Services name must have more or equal then 10 characters']
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
        // select: false
      },
      
    //   priceAfterDiscount: {
    //   type: Number,
    //   // Set the value based on the price and priceDiscount fields
    //   set: function () {
    //     if (this.price && this.priceDiscount) {
    //       return this.price - this.priceDiscount;
    //     }
    //   },
    //   // Exclude the field from the JSON representation
    //   toJSON: { virtuals: true },
    //   // Exclude the field from the object representation
    //   toObject: { virtuals: true }
    // },
      

    },
    {
      toJSON: { virtuals: true },
      toObject: { virtuals: true },
      timestamps:true
    }
  );

  const Services = mongoose.model('Services', Serviceschema);

module.exports = Services;
