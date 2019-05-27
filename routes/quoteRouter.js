const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const Quote = require("../models/quoteModel");

//Get all quotes
router.get("/quotes", (req, res) => {
  Quote.find()
    .then(quotes => {
      res.json(quotes);
    })
    .catch(err => {
      res.status(500).json({
        error: err.message
      });
    });
});

//Create new quote
router.post("/quotes", jsonParser, (req, res) => {
  const payload = {
    quote: req.body.quote,
    author: req.body.author
  };
  Quote.create(payload)
    .then(newQuote => res.status(201).json(newQuote))
    .catch(err => {
      res.status(500).json({
        error: err.message
      });
    });
});

module.exports = {
  router
};
