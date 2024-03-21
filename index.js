// const express = require('express')
// const morgan = require('morgan')
// const mongoose = require('mongoose');
// require('dotenv').config()
// const cookieParser=require('cookie-parser')
// const errorhandeler = require('./src/utils/ErrorHandling')
// const ErrorHandling  = require('./src/utils/ApiError')
// const cors = require('cors');
// const userRouter = require('./src/routes/userRoutes');
// const servicesroute = require('./src/routes/servicesRoute');
// const contactUs = require('./src/routes/contactUsRoute');
// const blogsRouting = require('./src/routes/blogsRoute')
// const aboutRouting = require('./src/routes/Aboutus')
// const path = require('path');
// const Home = require('./src/routes/HomeRoute')

// // const Visitor = require('../fullstack-cryl-dental/src/models/Vistormode')

// require('./dbconfig')

// const app = express()

// app.use(express.json({ limit: '10kb' }));
// // app.use(express.urlencoded({ extended: true, limit: '10kb' }));
// // app.use(cors());





// // app.use(async (req, res, next) => {
// //     try {
// //       console.log(req.ip);
  
// //       const newVisitor = new Visitor({
// //         ip: req.ip, // Assuming IP is available in req
// //       });
  
// //       console.log(newVisitor);
  
// //       await newVisitor.save();
  
// //       next();
// //     } catch (error) {
// //       console.error('Failed to log visitor:', error);
// //       next(error); // Pass the error to the error handling middleware
// //     }
// //   });





// app.use(cookieParser());
// // Parse URL-encoded bodies
// // app.use(express.urlencoded({ extended: true }));
// app.use(morgan('dev'));
// app.use(express.static(path.join(__dirname, "src/images")));
// console.log(path.join(__dirname, "src/images"))
// app.get('/',(req,res)=>{
//     res.send("metawea")
// })
// app.use('/users', userRouter);
// app.use('/service', servicesroute);
// app.use('/Home', Home);

// app.use('/contactus', contactUs);
// // app.use('/services', servicesroute);
// app.use('/blogs', blogsRouting);
// app.use('/about', aboutRouting);




// app.all("*",(req,res,next) => {
// // const err= new Error("this is "+req.originalUrl)
// // err.status='ssssssssssss'
// // err.statusecode='300'
// // next( 
// // new errorhandelercl(400,"this rout doesnt exsite"+req.originalUrl)
// // )
// throw new ErrorHandling(400,"aaaaaaaaaaaaaaaaaa")
// })

// app.use(errorhandeler)
// const PORT = process.env.PORT || 3000
// app.listen(PORT,()=>{
//     console.log("donnnnnnn")
// })



const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const errorhandler = require('./src/utils/ErrorHandling');
const ErrorHandling = require('./src/utils/ApiError');
const cors = require('cors');
const userRouter = require('./src/routes/userRoutes');
const servicesroute = require('./src/routes/servicesRoute');
const contactUs = require('./src/routes/contactUsRoute');
const blogsRouting = require('./src/routes/blogsRoute');
const aboutRouting = require('./src/routes/Aboutus');
const path = require('path');
const Home = require('./src/routes/HomeRoute');

require('./dbconfig');

const app = express();
app.use(bodyParser.json({ limit: '50mb' })); // Increase the limit as needed
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'src/images')));
console.log(path.join(__dirname, 'src/images'));

app.use(express.static(path.join(__dirname, './src/build')));
// app.use(
//   cors({
//     origin: 'http://localhost:3111/blogs'
//   })
// );
app.use(cors())
// app.use(
//   cors({
//     origin: 'https://detais-clinc.vercel.app'
//   })
// );
app.get('/', async(req, res) => {
  // res.sendFile(path.join(__dirname, './Detais-Clinic/build', 'index.html'));
  await res.sendFile(path.resolve('./src/build/index.html'))

});


app.use('/users', userRouter);
app.use('/service', servicesroute);
app.use('/Home', Home);
app.use('/contactus', contactUs);
app.use('/blogs', blogsRouting);
app.use('/about', aboutRouting);

app.all('*', (req, res, next) => {
  throw new ErrorHandling(400, 'aaaaaaaaaaaaaaaaaa');
});

app.use(errorhandler);

// const PORT = process.env.PORT || 3000;
app.listen(3111, () => {
  console.log('Server is running on port', 3111);
});