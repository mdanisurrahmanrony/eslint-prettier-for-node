const mongoose = require("mongoose");

const orderitemSchema = new mongoose.Schema(
  {
    quantity: {
      type: Number,      
      required: true,      
    },
    product: {
      type: String,      
      required: true,      
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orderitem", orderitemSchema);
