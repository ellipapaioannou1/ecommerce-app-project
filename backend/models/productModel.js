import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
    },
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
 },
    {
        timestamps: true,
    }
);

const producstSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
    },
    name: {
        type: String,
        required: true,
        ref: "User",
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    decription: {
        type: String,
        required: true,
    },
    mpn: {
        type: String,
        required: true,
    },
    inStock: {
        type: Number,
        required: true,
        default: 0,
    },
    availability: {
        type: String,
        required: true,
    },
    inStock: {
        type: Number,
        required: true,
        default: 0,
    },
    reviews: [reviewSchema],

    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    countReviews: {
        type: Number,
        required: true,
        default: 0,
    },
    size: {
        type: String,
        required: true,
    },   

});

const Product = mongoose.model("Product", producstSchema);

export default Product;