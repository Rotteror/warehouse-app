const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  typeProduct: {
    type: String,
    enum: ["Hazard", "Non Hazard"],
    default: "neutral",
  },
  unit: {
    type: Number,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
