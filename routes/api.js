const express = require('express');
const router = express.Router();

//  get list of quotes 
router.get('/quotes', (req, res) => {
  res.send({ type: 'GET' })
})


// get quote by id 
router.get('/quotes/:id', (req, res) => {
  res.send({type:'GET'})
})

// create quote 
router.post('/quotes', (req, res) => {
  res.send({type:'POST'})
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