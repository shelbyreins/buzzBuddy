const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const DrinkSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  allEvents: {
    type: Object,
  },
  event: {
    type: String,
    required: true
  },
  quantity: {
    type: Number
  },
  price: {
      type: Number 
  },
  date: {
    type: String
  }
});

module.exports = Drink = mongoose.model('drinks', DrinkSchema)