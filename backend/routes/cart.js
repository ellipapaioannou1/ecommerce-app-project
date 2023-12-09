import { Router } from "express";
import Cart from "../models/cartModel.js";
import Product from "../models/productModel.js";
const cartRouter = Router();


cartRouter.post("/", async (req,res) => {
    const cart = new Cart();
    await cart.save();
    res.status(200).json({id: cart._id});
})

cartRouter.get("/:id", async (req,res) => {
    const cart = await Cart.findById(req.params.id);
    const products = await Promise.all(
        cart.products.map((el) => Product.findById(el)) 
    ); 
     res.status(200).json({
        id: cart._id,
        products
     });
 }
    
)

cartRouter.put("/:id/add/:productId", async (req,res) => {
    const cart = await Cart.findById(req.params.id);
    cart.products.push(req.params.productId);
    await cart.save();
    res.status(200).json(cart);
})

cartRouter.delete("/:id/remove/:productId", async (req, res) => {
    const cart = await Cart.findById(req.params.id);
    cart.products = cart.products.filter(el => el.valueOf() != req.params.productId);
    await cart.save();
    res.status(200).json(cart);
}

)

export default cartRouter;