const express = require("express")
const { append } = require("express/lib/response")
const Animal = require("../models/Animal")

//Create the Router
const router = express.Router()

//ERROR Handler
function errorHandler(error, res){
    res.json(error)
}

//Routes

//SEED Route
router.get("/seed", async (req, res) => {
    await Animal.remove({}).catch((error) => errorHandler(error, res))
    const animals = await Animal.create([
        {species: "Blue Whale", extinct: false, location: "Ocean", lifeExpectancy: 85},
        {species: "Green Sea Turtle", extinct: false, location: "Subtropical Oceans", lifeExpectancy: 75},
        {species: "Woolly Mammoth", extinct: true, location: "Northern Hemisphere", lifeExpectancy: 60}
    ]).catch((error) => errorHandler(error, res))
    res.json(animals)
})

//INDUCES
//INDEX route - GET - List all animals
router.get("/", async (req, res) => {
    const animals = await Animal.find({}).catch((error) => errorHandler(error, res))
    res.render("animal/index.ejs", {animals})
});

//NEW route - GET - Get the new form
router.get("/new", (req, res) => {
    res.render("animal/new.ejs")
})

//DESTROY route - DELETE - Deletes one animal

//UPDATE route - PUT - Updates one animal

//CREATE route - POST - Creates an animal
router.post("/", async (req, res) => {

    //make sure readyToExist is true or false
    req.body.readyToExist = Boolean(req.body.readyToExist)

    //Create the animal    
    await Animal.create(req.body).catch((error) => errorHandler(error, res))

    //redirect to main page
    res.redirect("/animal")
})

//EDIT route - GET - Get the edit form

//SHOW route - GET - Gets one animal
router.get("/:id", async (req, res) => {
    const animal = await Animal.findById(req.params.id)
    res.render("animal/show.ejs", {animal})
})





//Export the Routes
module.exports = router