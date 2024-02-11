const mongoose = require('mongoose')
const validator = require('validator')
const joi = require('joi')
var jwt = require('jsonwebtoken');

const HomePage = mongoose.Schema({
    section: {
      type: String,
      enum: ['landingpage','section','section2','logo','doctors'],
      default: ''
    },
   
    title: {
        type:String,
        // required:[true,"please enter Title please"],
        trim: true,
        
    },
    name: {
        type:String,
        // required:[true,"please enter Title please"],
        trim: true,
        
    },
    spacilist: {
        type:String,
        // required:[true,"please enter Title please"],
        trim: true,
        
    },
    link: {
        type:String,
        // required:[true,"please enter Title please"],
        trim: true,
        
    },
    subTitle: {
        type: String,
        // required:[true,"the subTitle is required field"],
        trim: true,
        
    },
    images: {
        type: String,
        trim: true,
        default:''
    },
    path:{
        type: String,
        trim: true,
        default:''
    }


},{timestamps:true,
toJSON:{virtuals:true},
toObject:{virtuals:true},
}
);
// addBlogModel.virtual('comment',{
//     ref:'addcomment',
//     foreignField :"blogId",
//     localField:"_id"
// })

// function validateaddBlog (obj){

// const schema = joi.object({
//     title : joi.string().trim().required(),
//     // titleAR : joi.string().trim().required(),
//     description :joi.string().trim().required(),
//     // descriptionAR :joi.string().trim().required(),

// });
// return schema.validate(obj);

// }









const Homepage = mongoose.model('Homepage', HomePage)
module.exports = Homepage