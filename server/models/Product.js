const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  typeProduct: {
    type: String,
  },
  unit: {
    type: Number,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
