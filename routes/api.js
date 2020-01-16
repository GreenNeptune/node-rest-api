const express = require('express');
const router = express.Router();
const Quote = require('../models/quote')

router.get('/quotes', async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.json(quotes)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
});

router.get('/quotes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const quote = await Quote.findById({ "_id": id });
    res.json(quote);
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
});

router.post('/quotes', async (req, res) => {
  try {
    const quote = await Quote.create(req.body);
    res.status(201).json(quote)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }

});

router.put('/quotes/:id', async (req, res) => {
  try {
    const { id } = req.params
    const oldQuote = await Quote.findByIdAndUpdate({ _id: id }, req.body);
    const updatedQuote = await Quote.findOne({ _id: id });
    res.json(updatedQuote)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
});

router.delete('/quotes/:id', async (req, res) => {
  try {
    const { id } = req.params
    const quote = await Quote.findByIdAndRemove({ _id: id });
    res.json(quote)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
});


module.exports = router;