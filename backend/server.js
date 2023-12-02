import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRouter from './routes/user.js';
import authenticationRouter from './routes/authentication.js';
import productRouter from './routes/product.js';
import cartRouter from './routes/cart.js';
import orderRouter from './routes/order.js';
import cors from 'cors';

dotenv.config();
const port = process.env.PORT || 3000;


//connect to db
connectDB();

const app = express();
app.use(cors());

//allow us to receive info from frontend
app.use(express.json());
app.get("/", async(req,res) => {
    res.status(200).send("ok");
})
app.use("/auth", authenticationRouter);  //create the url auth/blah/blah apo to routes
app.use("/users", userRouter);
app.use("/orders", orderRouter);
app.use("/products", productRouter);



app.listen(port, () => console.log(`Server running in port ${port}`));