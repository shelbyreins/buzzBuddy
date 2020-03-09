const express = require('express');
const drinks = express.Router();
const cors = require("cors");

const Drink = require("./../models/Drink");
drinks.use(cors());

drinks.post("/addDrink", function(req, res) {
    const drinkData = {
        // _id: req.body._id,
        // email: req.body.email,
        quantity: req.body.quantity,
        price: req.body.price
    };

    Drink.create(drinkData)
        .then(drink => {
            res.json({ status: drink.quantity + 'Added Drink' })
        })
        .catch(err => {
            res.send('error: ' + err)
        })
});

module.exports = drinks;