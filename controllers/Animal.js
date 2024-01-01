const express = require("express")
const { append } = require("express/lib/response")
const Animal = require("../models/Animal")

//Create the Router
const router = express.Router()

//Routes

//SEED Route
router.get("/seed", async (req, res) => {
    // await Animal.remove({})
    const animals = await Animal.create([
        {species: "Blue Whale", extinct: false, location: "Ocean", lifeExpectancy: 80 - 90},
        {species: "Green Sea Turtle", extinct: false, location: "Subtropical Oceans", lifeExpectancy: 50 - 100},
        {species: "Woolly Mammoth", extinct: true, location: "Northern Hemisphere", lifeExpectancy: 60}
    ])
    res.json(animals)
})

//Export the Routes
module.exports = router