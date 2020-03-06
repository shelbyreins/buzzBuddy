const express = require('express');
const drinks = express.Router();
const cors = require("cors");

const Drink = require("./../models/Drink");
drinks.use(cors());

drinks.post("/addDrink", function(req, res) {
    const drinkData = {
        email: req.body.email,
        quantity: req.body.quantity,
        drink: req.body.drink,
        price: req.body.price,
    };

    Drink.insert(drinkData);
});

module.exports = drinks;