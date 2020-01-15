const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//  create quote schema 
const QuoteSchema = new Schema({
  author: {
    type: String,
    required: [true, 'author is required']
  },
  text: {
    type: String,
    required: [true, 'text is required']
  }
})

//  create collection called 'quotes' in db, 
//  create correspond schema to 'quotes' collection   
const Quote = mongoose.model('quote', QuoteSchema);


module.exports = Quote