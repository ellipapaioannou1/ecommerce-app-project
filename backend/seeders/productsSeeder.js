import connectDB from "../config/db.js";
import dotenv from 'dotenv';
import Product from "../models/productModel.js";
import { ObjectId } from "mongodb";
dotenv.config();


connectDB();

const PRODUCTS = [
    {
        _id: new ObjectId("656b588d65a6e683d04c4045"),
        name: "Test1",
        price: 25.0,
        description: "jkflshdfkhfksdfsdfsfsdfsdf",
        image: "bags1.png",
        inStock: 4,
    },
    {
        _id: new ObjectId("656b588d65a6e683d04c4046"),
        name: "Test1",
        price: 25.0,
        description: "jkflshdfkhfksdfsdfsfsdfsdf",
        image: "bags2.png",
        inStock: 4,
    },
    {
        _id: new ObjectId("656b588d65a6e683d04c4047"),
        name: "Test1",
        price: 25.0,
        description: "jkflshdfkhfksdfsdfsfsdfsdf",
        image: "bags3.png",
        inStock: 4,
    },
    {
        _id: new ObjectId("656b588d65a6e683d04c4048"),
        name: "Test1",
        price: 25.0,
        description: "jkflshdfkhfksdfsdfsfsdfsdf",
        image: "bags4.png",
        inStock: 4,
    },
    {
        _id: new ObjectId("656b588d65a6e683d04c4049"),
        name: "Test1",
        price: 25.0,
        description: "jkflshdfkhfksdfsdfsfsdfsdf",
        image: "bags5.png",
        inStock: 4,
    },
    {
        _id: new ObjectId("656b588d65a6e683d04c404a"),
        name: "Test1",
        price: 25.0,
        description: "jkflshdfkhfksdfsdfsfsdfsdf",
        image: "bags6.png",
        inStock: 4,
    },
    {
        _id: new ObjectId("656b588d65a6e683d04c404b"),
        name: "Test1",
        price: 25.0,
        description: "jkflshdfkhfksdfsdfsfsdfsdf",
        image: "bags7.png",
        inStock: 4,
    },
    {
        _id: new ObjectId("656b588d65a6e683d04c404c"),
        name: "Test1",
        price: 25.0,
        description: "jkflshdfkhfksdfsdfsfsdfsdf",
        image: "bags8.png",
        inStock: 4,
    },

];


await Product.insertMany(PRODUCTS);
process.exit(0);
