import { Router } from "express";
import Product from "../models/productModel.js";

const productRouter = Router();

// GET product by id
productRouter.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET all products
productRouter.get("/", async (req,res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});


export default productRouter;