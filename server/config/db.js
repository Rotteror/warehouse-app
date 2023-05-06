const mongoose = require("mongoose");

const connectDB = async () => {
  // use 127.0.0.1 if you use node 17 or above else localhost
  const conn = await mongoose.connect("mongodb://127.0.0.1:27017/react");

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
