import { Router } from "express";
import Cart from "../models/cartModel.js";
import Product from "../models/productModel.js";

const cartRouter = Router();

//CREATE new cart
cartRouter.post("/", async (req,res) => {
    //Create new instance
    const cart = new Cart();
    //Save cart to db
    await cart.save();
    res.status(200).json({id: cart._id});
});

//GET cart by id
cartRouter.get("/:id", async (req,res) => {
    const cart = await Cart.findById(req.params.id);
    //Fetch product details
    const products = await Promise.all(
        cart.products.map((el) => Product.findById(el)) 
    ); 
     res.status(200).json({
        id: cart._id,
        products
     });   
    
});

//Add product to cart
cartRouter.put("/:id/add/:productId", async (req,res) => {
    //Find cart by id
    const cart = await Cart.findById(req.params.id);
    //Add product by id to cart
    cart.products.push(req.params.productId);
    await cart.save();
    res.status(200).json(cart);
});

//Remove product from the cart
cartRouter.delete("/:id/remove/:productId", async (req, res) => {
    //Find cart by id
    const cart = await Cart.findById(req.params.id);
    //Filter product
    cart.products = cart.products.filter(el => el.valueOf() != req.params.productId);
    await cart.save();
    res.status(200).json(cart);
});

export default cartRouter;