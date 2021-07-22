const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require("../controller/productController");

// @desc GET all products from databse
// @Route GET /api/products
// @access Public
// A .get function handles GET requests which is used to request data. We are requesting data from our mongo databse
router.get("/", getAllProducts);

// @desc GET a product by id from databse
// @Route GET /api/products/:id
// @access Public
router.get("/:id", getProductById);

module.exports = router;
