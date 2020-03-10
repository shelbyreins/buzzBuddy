const express = require('express');
const drinks = express.Router();
const cors = require("cors");

const Drink = require("./../models/Drink");
drinks.use(cors());

drinks.post("/addDrink", function(req, res) {
    const drinkData = {

        userId: req.body.userId,
        // event: req.body.event,
        allEvents: req.body.allEvents,
        // quantity: req.body.quantity,
        // price: req.body.price
    };

    Drink.create(drinkData)
        .then(drink => {
            res.json({ status: drink.quantity + ' Event Added' })
        })
        .catch(err => {
            res.send('error: ' + err)
        })
});

module.exports = drinks;