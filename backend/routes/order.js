import { Router } from "express";
import Order from '../models/orderModel.js';

const orderRouter = Router();

// CREATE new order
orderRouter.post("/", async (req, res) => { 
    const savedOrder = await new Order(req.body).save();
    res.status(200).json(savedOrder);
  });

export default orderRouter;