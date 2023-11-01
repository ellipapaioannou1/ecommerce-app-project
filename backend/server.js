import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import products from './data/products.js';
const port = process.env.PORT || 3000;


//connect to db
connectDB();

const app = express();

app.get('/', (req,res) => {
    res.send('API is running..')
});

//products route
app.get('/api/products', (req,res) => {
    res.json(products);
});

//single product route
app.get('/api/products/:id', (req,res) => {
    const product = products.find((p) => p.id === req.params.id);
    res.json(product);
});


app.listen(port, () => console.log(`Server running in port ${port}`));