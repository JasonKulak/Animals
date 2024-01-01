require("dotenv").config() // get .env vars
const mongoose = require("mongoose") // imports mongoose

//Establish our connection
mongoose.connect(process.env.DATABASE_URL)

//Connection Events
mongoose.connection
.on("open", () => {console.log("Connect to Mongo")})
.on("close", () => {console.log("Disconnected from Mongo")})
.on("error", () => {console.log(error)})

//export the mongoose object
module.exports = mongoose