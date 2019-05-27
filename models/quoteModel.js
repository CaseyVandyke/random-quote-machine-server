"use strict";

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const quoteSchema = mongoose.Schema({
  quote: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
});

const Quote = mongoose.model("quotes", quoteSchema);

module.exports = Quote;
