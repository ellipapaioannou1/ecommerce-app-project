import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    items: [
        { 
        
        }
    ],
    totalCost: {
        type: Number,
        required: true,
        default: 0.0,
    },
    cartId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'Cart',
    }

 
 },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;