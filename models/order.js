const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema(
  {   
    orderItems: [{ type: ObjectId, ref: "Orderitem" }],
    phone: {
      type: String,      
      required: true,      
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
