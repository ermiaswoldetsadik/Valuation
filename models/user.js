// Initialize mongoose by requiring the mongoose dependency 
const mongoose = require("mongoose");

// Create initial mongoose schema
const Schema = mongoose.Schema;

// Setup schema for mongoDB for users who are evaluating items 
  const UserSchema = new Schema({
    uid: {
      type: String,
      unique: true
    },
    name: {
      type: String
    },
    email: String,
    image: String,
    gender: String,
    dateJoined: { type: Date }
  });

  // Set user variable equal to the user schema defined in the model
   const User = mongoose.model("User", UserSchema);

   module.exports = User;
