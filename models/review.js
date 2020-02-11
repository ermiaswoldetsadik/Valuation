// Import mongoose for database connection
const mongoose = require("mongoose");
// Set Schema variable equal to the schema introduced to the mongo db via mongoose
const Schema = mongoose.Schema;

// Set ReviewSchema for review data to be imported into the mongodb
const ReviewSchema = new Schema({
  reviewDate: { type: Date },
  quality: { type: Number },
  appeal: { type: Number },
  value: { type: Number },
  ItemId: { type: String },
  reviewer: { type: String },
  notes: { type: String }
});

// Set review variable equal to the database model for mongoose
const Review = mongoose.model("Review", ReviewSchema);

// Set the Review file to be exported for other files to use
module.exports = Review;
