import connectDB from "../config/db.js";
import dotenv from "dotenv";
import Product from "../models/productModel.js";
import { ObjectId } from "mongodb";

dotenv.config();
//Connect to MongoDB
connectDB();

const PRODUCTS = [
    {
        _id: new ObjectId("656b588d65a6e683d04c4045"),
        name: "Celestial Grace",
        price: 25.0,
        description: "Elegance personified, the Celestial Grace handbag boasts a timeless design with its lustrous navy blue leather exterior. Delicate gold hardware accents adorn the bag, while the spacious interior offers organized compartments for your daily essentials. This sophisticated accessory effortlessly transitions from day to night, making it a versatile companion for any occasion.",
        image: "bags1.png",

    },
    {
        _id: new ObjectId("656b588d65a6e683d04c4046"),
        name: "Urban Explorer",
        price: 35.0,
        description: "Introducing the Urban Explorer, a fusion of style and functionality. Crafted from durable canvas in a chic olive green hue, this handbag is a perfect companion for the modern woman on the go. Multiple pockets provide ample storage for your tech gadgets and daily necessities, while the adjustable leather straps add a touch of urban flair to your ensemble.",
        image: "bags2.png",
    },
    {
        _id: new ObjectId("656b588d65a6e683d04c4047"),
        name: "Bohemian Blossom",
        price: 45.0,
        description: "The Bohemian Blossom clutch is a festival of colors and textures. Hand-woven with vibrant threads and adorned with eclectic beading, this statement piece captures the spirit of free-spirited bohemian fashion. Its compact size makes it ideal for a night out, while the magnetic closure ensures your essentials stay secure in this boho-chic masterpiece.",
        image: "bags3.png",
    },
    {
        _id: new ObjectId("656b588d65a6e683d04c4048"),
        name: "Ivory Elegance",
        price: 45.0,
        description: "For the minimalist at heart, the Ivory Elegance crossbody bag is a study in understated sophistication. Crafted from buttery-soft ivory leather, its clean lines and compact silhouette exude modern simplicity. The detachable shoulder strap allows for versatile styling, making it a go-to choice for those who appreciate refined elegance.",
        image: "bags4.png",
    },
    {
        _id: new ObjectId("656b588d65a6e683d04c4049"),
        name: "Safari Chic",
        price: 45.0,
        description: "Unleash your wild side with the Safari Chic bucket bag. Crafted from animal-friendly faux leather in a daring leopard print, this bag is a bold fashion statement. The drawstring closure adds a touch of bohemian flair, while the spacious interior accommodates your daily essentials with ease. Elevate your street style with this fierce and fabulous accessory.",
        image: "bags5.png",
    },
    {
        _id: new ObjectId("656b588d65a6e683d04c404a"),
        name: "Retro Glamour",
        price: 25.0,
        description: "Embrace vintage charm with the Retro Glamour satchel. The rich burgundy leather exterior, coupled with antique brass hardware, evokes a sense of timeless allure. The structured shape and top-handle design add a touch of old-world glamour, making this handbag a standout accessory for those who appreciate classic style with a contemporary twist.",
        image: "bags6.png",
    },
    {
        _id: new ObjectId("656b588d65a6e683d04c404b"),
        name: "Midnight Velvet",
        price: 15.0,
        description: "Step into the world of luxury with the Midnight Velvet evening clutch. This opulent accessory features a plush velvet exterior in a deep midnight blue, adorned with a sparkling crystal clasp. The compact design conceals a surprisingly spacious interior, making it the perfect companion for glamorous evenings out when you want to make a statement.",
        image: "bags7.png",
    },
    {
        _id: new ObjectId("656b588d65a6e683d04c404c"),
        name: "Blush Bloom",
        price: 35.0,
        description: "Introducing the Blush Bloom bag – a celebration of femininity and grace. The soft, blush pink hue of this handbag is perfectly complemented by delicate floral embroidery, creating a whimsical and romantic aesthetic. The supple faux leather feels luxurious to the touch, and the adjustable chain-link strap adds a modern edge. With its compact size and charming design, the Blush Bloom is an enchanting accessory for those who embrace the elegance of pink.",
        image: "bags8.png",
    },

];

//Insert sample products to Products collection
await Product.insertMany(PRODUCTS);
process.exit(0);
