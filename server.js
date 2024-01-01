//********************
//Dependencies
//********************
require("dotenv").config({})
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const AnimalRouter = require("./controllers/Animal")


//********************
//Application Object
//********************
const app = express()


//********************
//Middleware
//********************
app.use(morgan ("dev"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use("/static", express.static("public"))



//********************
//Routes and Routers
//********************
app.get("/", (req, res) => {
    res.send("Animals are running wild!!!")
})

app.use("/animal", AnimalRouter)




//********************
//Server Listener
//********************
const PORT = process.env.PORT || 3060
app.listen(PORT, () => {
    console.log("Welcome to the jungle")
})