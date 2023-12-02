import { Router } from "express";
import Order from '../models/orderModel.js';
const orderRouter = Router();

// CREATE
orderRouter.post("/", async (req, res) => { //orderorderRouter
    try {
      const savedOrder = await new Order(req.body).save();
      res.status(200).json(savedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // UPDATE
  orderRouter.put("/:id", async (req, res) => {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
      res.status(200).json(updatedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // DELETE
  orderRouter.delete("/:id", async (req, res) => {
    try {
      await Order.findByIdAndDelete(req.params.id);
      res.status(200).json("Order has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET USER ORDERS
  orderRouter.get("/find/:userId", async (req, res) => {
    try {
      const orders = await Order.find({ userId: req.params.userId });
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

export default orderRouter;