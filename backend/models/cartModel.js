//

import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    products: [{
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'Product',
    }],

})


const Cart = mongoose.model("Cart", cartSchema);

export default Cart;