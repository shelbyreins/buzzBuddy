const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const DrinkSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
      type: Number 
  }
});

module.exports = Drink = mongoose.model('drinks', DrinkSchema)