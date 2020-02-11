// Imports for connecting to Mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create schema for mongoose database collection to store item data

  const ItemSchema = new Schema ({
  img: { type: String },
  dateUploaded: { type: Date, default: Date.now },
  description: { type: String },
  name: { type: String },
  location: { type: String },
  ownerId: { type: String }
});

// Set the Item variable equal to the mongoose Item Schema
const Item = mongoose.model("Item", ItemSchema);

// Export the module to be used in other files
module.exports = Item;
