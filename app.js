const express = require("express");
const app = express();
const dotenv = require('dotenv');
const connectToDB = require("./config/database");

app.use(express.urlencoded({extended: true})); 
app.set("view engine", "ejs");

dotenv.config({ path: "./config/.env" });

connectToDB()

//routes and function 
app.get("/" , (req,res) => {
    res.send("Hello World")
})

module.exports = app
