const mongoose = require('mongoose')
const validator = require('validator')
const joi = require('joi')
var jwt = require('jsonwebtoken');

const bookingSchema = mongoose.Schema({
    title: {
        type:String,
        required:[true,"enter your name please"],
        trim: true,
        
    },
    description: {
        type: String,
        required:[true,"the discription is required field"],
        trim: true,
        lowercase: true
    },

    images: {
        type: String,
        trim: true,
        default:''
    },
    // user: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'userModel',
    //     required: [true, 'Booking must belong to a User!']
    //   },

},{timestamps:true,
toJSON:{virtuals:true},
toObject:{virtuals:true},
}
);
// bookingSchema.pre(/^find/, function(next) {
//     this.populate('user')
//     next();
//   });

// function validateaddBlog (obj){

// const schema = joi.object({
//     title : joi.string().trim().required(),
  
//     description :joi.string().trim().required(),
  

// });
// return schema.validate(obj);

// }









const Blog = mongoose.model('Blog', bookingSchema)
module.exports = {Blog}