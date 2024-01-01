const mongoose = require("./connection")

// ANIMAL SCHEMA = Definition/Shape of the Data Type

const animalSchema = new mongoose.Schema({
    species: {type: String, required: true},
    extinct: Boolean,
    location: String,
    lifeExpectancy: Number
}, {timestamps: true}) 

//Animal Model - interface with the database for Animals
const Animal = mongoose.model("Animal", animalSchema)

//Export the Animal Model
module.exports = Animal