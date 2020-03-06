const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const DrinkSchema = new Schema({
  quantity: {
    type: Number,
    required: true
  },
  drink: {
      type: String
  },
  price: {
      type: Number 
  }
});

module.exports = Drink = mongoose.model('drinks', UserSchema)