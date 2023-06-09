const mongoose = require("mongoose");

const WarehouseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  products: [{}],
  history: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "History",
      default: [],
    },
  ],
});

module.exports = mongoose.model("Warehouse", WarehouseSchema);
