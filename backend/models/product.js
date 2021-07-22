// The exports object of the mongoose module is an instance of this class. Most apps will only use this one instance.
const mongoose = require("mongoose");

// Creating product scheme

// Mongoose schema represetns the infrastructure of a document. In this case, this is how the skeleton of a product wil look like with all of its information
const productSchema = new mongoose.Schema({
  // This is how the product will be shown and set up
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
});

// Create product model

// A mongoose.model function is simply a way to compile Schmeas. Models are responsible for creating and reading documents from underling databses
const Product = mongoose.model("product", productSchema);

module.exports = Product;
