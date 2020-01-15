require('dotenv').config();

const express = require('express');
const expressRouter = require ('./routes/api')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// create express app
const app = express();

// connect to db, create db if doesn't exists
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });

// overriding mongoose promise with node promise
// cuurently mongoose promise is deprecated
mongoose.Promise = global.Promise


// body parser can be replace with app.use(express.json()) at express@4.16.0 package
app.use(bodyParser.json());

// routes middleware 
app.use('/api', expressRouter);

app.listen(process.env.SERVER_PORT || 4000, function(){
  console.log(`start server on port :${process.env.SERVER_PORT}`);
});
