require("dotenv").config();
// Mongoose is simply a database program for storing data

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // connects to the mongo client
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      // Unified topology reduce maintence burner of the topology layers and removes confusing funcitionality
      useUnifiedTopology: true,
    });
    // Connect mongoose to our database
    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
};

module.exports = connectDB;
