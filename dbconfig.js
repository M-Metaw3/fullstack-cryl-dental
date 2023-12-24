const mongoose=require('mongoose')
mongoose.set('toJSON',{getters:true})
try {
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.DB_HOST,{useNewUrlParser:true,useUnifiedTopology:true,autoIndex:true}). then( async() => {
    console.log("Mongoose")

})
    
} catch (error) {
    console.log(error.message)
}