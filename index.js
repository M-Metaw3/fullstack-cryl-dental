const express = require('express')
const morgan = require('morgan')
require('dotenv').config()

const errorhandeler = require('./src/utils/ErrorHandling')
const ErrorHandling  = require('./src/utils/ApiError')


require('./dbconfig')

const app = express()
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.send("metawea")
})

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

app.listen(3000,()=>{
    console.log("donnnnnnn")
})