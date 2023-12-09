import connectDB from "../config/db.js";
import dotenv from 'dotenv';
import Product from "../models/productModel.js";
import { ObjectId } from "mongodb";
dotenv.config();


connectDB();

const PRODUCTS = [
    {
        _id: new ObjectId("656b588d65a6e683d04c4045"),
        name: "Nature's Canvas",
        price: 25.0,
        description: "Beautiful handbag with petal pattern.Shades of blue and red.",
        image: "bags1.png",

    },
    {
        _id: new ObjectId("656b588d65a6e683d04c4046"),
        name: "Rustic Charm",
        price: 35.0,
        description: "Handmade with love,this bag is ideal for summer strolls. Shades of green, with leaf pattern",
        image: "bags2.png",
    },
    {
        _id: new ObjectId("656b588d65a6e683d04c4047"),
        name: "Safari Chic",
        price: 45.0,
        description: "Unique bag, for wild outfits. Black and white shades, zebra-like pattern",
        image: "bags3.png",
    },
    {
        _id: new ObjectId("656b588d65a6e683d04c4048"),
        name: "Enchanting Ethereal",
        price: 45.0,
        description: "Handmade with love,this bag is ideal for summer strolls. Shades of green, with leaf pattern",
        image: "bags4.png",
    },
    {
        _id: new ObjectId("656b588d65a6e683d04c4049"),
        name: "Safari Chic",
        price: 45.0,
        description: "Unique bag, for wild outfits. Black and white shades, zebra-like pattern",
        image: "bags5.png",
    },
    {
        _id: new ObjectId("656b588d65a6e683d04c404a"),
        name: "Pink Dreams",
        price: 25.0,
        description: "jkflshdfkhfGirly looks, a bag ideal for day adventures. Pink and red shades, flower patternksdfsdfsfsdfsdf",
        image: "bags6.png",
    },
    {
        _id: new ObjectId("656b588d65a6e683d04c404b"),
        name: "Heaven Birds",
        price: 15.0,
        description: "Paradise bag, pink shades. Bird pattern",
        image: "bags7.png",
    },
    {
        _id: new ObjectId("656b588d65a6e683d04c404c"),
        name: "Soft Dreams",
        price: 35.0,
        description: "Ideal pouch for everyday strolls.Pinkish shades",
        image: "bags8.png",
    },

];


await Product.insertMany(PRODUCTS);
process.exit(0);
