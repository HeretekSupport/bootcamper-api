const express = require('express');
const dotenv = require('dotenv');

//Load env vars
dotenv.config({ path: './config/config.env' });
const app = express();

//Globals
const PORT = process.env.PORT || 5000;

//To run server need to call listen

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on PORT:${PORT}`)
);
