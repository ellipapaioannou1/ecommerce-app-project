import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    items: [
        { type: mongoose.SchemaTypes.ObjectId,
            required: true,
            ref: 'Product',
        }
    ],
    totalCost: {
        type: Number,
        required: true,
        default: 0.0,
    },

 
 },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;