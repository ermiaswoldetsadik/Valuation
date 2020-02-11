// Dependencies required for data uploading 
const db = require("../models/");
const path = require("path");
const fs = require('fs');
const multer = require('multer');

// Multer allows for adding files from a users local storage to the database
//This upload controller allows someone to update the database with an image
const storage = multer.diskStorage({
  destination:'./client/public/uploads',
  filename(req, file, cb) {
    console.log(file)
    cb(null, 'file.originalname'+ Date.now());
  },
});

// Upload is set the the variable multer which is a storage method
const upload = multer({ storage });

// Defining methods for the item
// Meta data from the existing image is stored into the database 
module.exports = {
  create: function(req, res) {
    const file = req.file; // file passed from client
    const meta = req.body; // all other values passed from the client, like name, etc..
    console.log(meta)
    console.log(file)
  },
  
};
