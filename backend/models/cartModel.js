import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    // Array of product ids associated with the cart
    products: [{
            type: mongoose.SchemaTypes.ObjectId,
            required: true,
            ref: "Product",
        }],
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;