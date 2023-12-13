import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRouter from './routes/product.js';
import cartRouter from './routes/cart.js';
import orderRouter from './routes/order.js';
import cors from 'cors';

dotenv.config();
const port = process.env.PORT || 3000;

//connect to db
connectDB();

const app = express();
//Enable CORS for server
app.use(cors());

//allow us to receive info from frontend
app.use(express.json());
app.get("/", async(req,res) => {
    res.status(200).send("ok");
})
//create  url for routes
app.use("/orders", orderRouter);
app.use("/products", productRouter);
app.use("/carts", cartRouter);


//Start server
app.listen(port, () => console.log(`Server running in port ${port}`));