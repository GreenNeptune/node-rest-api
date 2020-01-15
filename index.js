require('dotenv').config()

const express = require('express');

// create express app
const app = express()

app.listen(process.env.SERVER_PORT || 4000, function(){
  console.log(`start server on port :${process.env.SERVER_PORT}`);
});
