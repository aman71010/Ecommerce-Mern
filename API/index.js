import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";
import productRoute from "./routes/product.js";
import cartRoute from "./routes/cart.js";
import orderRoute from "./routes/order.js";
import stripeRoute from "./routes/stripe.js";

dotenv.config();

const app =  express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

const URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 8080;

if(process.env.NODE_ENV == "production"){
  app.use(express.static("client/build"));
}

mongoose.connect(URL).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Backend server is running successfully on ${PORT}`);
        console.log("DB connection successfully");
    });
}).catch((err)=>{console.log(err)});

