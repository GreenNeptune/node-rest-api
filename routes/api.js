const express = require('express');
const router = express.Router();
const Quote = require('../models/quote')

//  get list of quotes 
router.get('/quotes', (req, res) => {
  res.send({ type: 'GET' })
})


// get quote by id 
router.get('/quotes/:id', (req, res) => {
  res.send({ type: 'GET' })
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
  res.send({ type: 'PUT' });
});

// delete quote 
router.delete('/quotes/:id', (req, res) => {
  res.send({ type: 'DELETE' });
});


module.exports = router;