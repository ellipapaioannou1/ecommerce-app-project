import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    items: [
        {
            name: {type: String, required: true},
            quantity: {type: Number, required: true},
            image: {type: String, required: true},
            price : {type: Number, required: true},
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Product",
            },
        }
    ],
    deliveryAddress: {
        address: {type: String, required: true},
        city: {type: String, required: true},
        postal: {type: String, required: true},
        region: {type: String, required: true},
        country: {type: String, required: true},
    },
    payment: {
        type: String,
        required: true,
    },
    paymentStatus: {
        id: {type: String},
        status: {type: String},
        time: {type: String},
        email: {type: String},
    },
    itemPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    vat: {
        type: Number,
        required: true,
        default: 0.0,
    },
    shippingCost:{
        type: Number,
        required: true,
        default: 0.0,
    },
    totalCost: {
        type: Number,
        required: true,
        default: 0.0,
    },
    isPaid:{
        type: Boolean,
        required: true,
        default: false,
    },
    paidTime: {
        type: Date,
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false,
    },
    deliveredDate: {
        type:Date,
    },
 },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;