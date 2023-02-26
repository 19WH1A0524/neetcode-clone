const dotenv = require("dotenv")
dotenv.config();

const mongoose = require("mongoose")
const str = process.env.MONGO_CONNECTION_STRING

const express = require("express");
const app = express();
app.use(express.static("frontend"))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/frontend/index.html");
})
mongoose.set('strictQuery', true)
mongoose.connect(str, function(err){
    if (err){
        console.error(err)
    }
    else{
        console.log("DB connection successful")
        app.listen(3000, function(){
            console.log("server running on http://localhost:3000")
        })
    }
})


