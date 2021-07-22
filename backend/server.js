require("dotenv").config();
const express = require("express");

const connectDB = require("./config/db");

// Routing is how an application responds to a client request when reaching an endpoint(aka a link)
const productRoutes = require("./routes/productRoutes");

connectDB();

const app = express();

// Need JSON data for react client
app.use(express.json());

// Create routes
//Will take you to product page
app.use("/api/products", productRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
