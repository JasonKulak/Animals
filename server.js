//********************
//Dependencies
//********************
require("dotenv").config({})
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")



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




//********************
//Server Listener
//********************
const PORT = process.env.PORT || 3060
app.listen(PORT, () => {
    console.log("Welcome to the jungle")
})