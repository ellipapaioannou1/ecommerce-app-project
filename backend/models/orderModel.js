import mongoose from "mongoose";

//Order model
const orderSchema = mongoose.Schema({
    // Array of product ids associated with the order
    items: [{
            type: mongoose.SchemaTypes.ObjectId,
            required: true,
            ref: "Product",
    }],
    totalCost: {
        type: Number,
        required: true,
        default: 0.0,
    },
 },
);

const Order = mongoose.model("Order", orderSchema);

export default Order;