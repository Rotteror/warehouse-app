const mongoose = require("mongoose");

const WarehouseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Hazards", "Non Hazards"],
  },
  size: {
    type: Number,
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      default: [],
    },
  ],
  history: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "History",
      default: [],
    },
  ],
});

module.exports = mongoose.model("Warehouse", WarehouseSchema);
