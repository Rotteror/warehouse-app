const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema({
  history_type: {
    type: String,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  amount: {
    type: Number,
  },
  created_At: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("History", HistorySchema);
