const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
const cookieParser=require('cookie-parser')
const errorhandeler = require('./src/utils/ErrorHandling')
const ErrorHandling  = require('./src/utils/ApiError')

const userRouter = require('./src/routes/userRoutes');
const servicesroute = require('./src/routes/servicesRoute');
const contactUs = require('./src/routes/contactUsRoute');
const blogsRouting = require('./src/routes/blogsRoute')


require('./dbconfig')

const app = express()

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.send("metawea")
})
app.use('/users', userRouter);
// app.use('/service', servicesroute);
app.use('/contactus', contactUs);
app.use('/services', servicesroute);
app.use('/blogs', blogsRouting);




app.all("*",(req,res,next) => {
// const err= new Error("this is "+req.originalUrl)
// err.status='ssssssssssss'
// err.statusecode='300'
// next( 
// new errorhandelercl(400,"this rout doesnt exsite"+req.originalUrl)
// )
throw new ErrorHandling(400,"aaaaaaaaaaaaaaaaaa")
})

app.use(errorhandeler)

app.listen(6000,()=>{
    console.log("donnnnnnn")
})