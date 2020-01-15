require('dotenv').config();

const express = require('express');
const expressRouter = require ('./routes/api')

// create express app
const app = express();

// routes middleware 
app.use('/api', expressRouter);

app.listen(process.env.SERVER_PORT || 4000, function(){
  console.log(`start server on port :${process.env.SERVER_PORT}`);
});
