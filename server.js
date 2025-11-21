/**Request → Middleware 1 → Middleware 2 → Router → Controller → Response */
//IMPORTS
const express = require('express');
const dotenv = require('dotenv');
// const logger = require('./middleware/logger'); -use Morgan instead 
const morgan = require('morgan');
//Route files
const bootcamps = require('./routes/bootcamps'); 

//GLOBALS
const PORT = process.env.PORT || 5000;

//Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Always put global middleware before routes!
// app.use(logger); 
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); //Dev Logging Middleware morgan
}
app.use('/api/v1/bootcamps', bootcamps);

//To run server need to call listen
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on PORT:${PORT}`)
);
