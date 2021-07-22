// A controller is where you'll fetch product models

const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    // This is where the products will be fetched and displayed as JSON
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    // This is where the products will be fetched and displayed as JSON
    res.json(product);
  } catch (error) {
    console.error(error);
    // This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using the JSON
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
