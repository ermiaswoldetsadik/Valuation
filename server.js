// Import dependencies for application functionality
const express = require ("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const axios = require("axios");;

//Initialize Body-parser for JSON data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Folder for static data
app.use(express.static("client/build"));

// Use routes folder for express api routes
app.use(routes);

// Initialize Mongoose connection to MONGO DB
mongoose.Promise = global.Promise;

// Connect to the MongoDB via Mongoose
mongoose.connect( process.env.MONGODB_URI || "mongodb://<items>:<valuation123>@ds035557.mlab.com:35557/heroku_6lwhkp9d")

// Start listening on PORT for server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}.`);
})