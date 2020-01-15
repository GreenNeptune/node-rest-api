const express = require('express');
const router = express.Router();
const Quote = require('../models/quote')

//  get list of quotes 
router.get('/quotes', (req, res) => {
  Quote.find().then(quotes => {
    res.send(quotes)
  })
})


// get quote by id 
router.get('/quotes/:id', (req, res) => {
  const { id } = req.params;
  Quote.findById({ "_id": id }).then(quote => {
    res.send(quote);
  });
})

// add quote to db 
router.post('/quotes', (req, res) => {
  // saving quote document to db
  Quote.create(req.body).then(quote => {
    res.send(quote)
  });
});

// update quote
router.put('/quotes/:id', (req, res) => {
  const { id } = req.params
  // return old quote
  Quote.findByIdAndUpdate({ _id: id }, req.body).then(() => {
    // get the updated quote
    Quote.findOne({ _id: id }).then(updatedQuote => {
      res.send(updatedQuote)
    });
  });
});

// delete quote 
router.delete('/quotes/:id', (req, res) => {
  const { id } = req.params
  Quote.findByIdAndRemove({ _id: id }).then(quote => {
    res.send(quote)
  });
});


module.exports = router;