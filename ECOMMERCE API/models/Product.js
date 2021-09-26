import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, unique: true},
        desc: {type: String, required: true},
        img: {type: String, required: true},
        categories: {type: Array},
        size: {type: String},
        color: {type: String},
        price: {type: String, required: true},
    },
    { timestamps: true }
);

const Product = new mongoose.model("Product", productSchema);
export default Product;