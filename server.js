const express = require ("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes"); 
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
const fs = require('fs');
const multer = require('multer');
const axios = require('axios');

// configures body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// serves up static assets
app.use(express.static("client/build"));

// adds the routes
app.use(routes); 

// sets up promises with mongoose
mongoose.Promise = global.Promise;
// connects to the mongo db
mongoose.connect(process.env.MONGODB_URI || "mongodb://<items>:<valuation123>@ds035557.mlab.com:35557/heroku_6lwhkp9d"
);

// starts the API server
// server activates...
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}.`);
});