import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";

dotenv.config();

const app =  express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/users", userRoutes);

const URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 8080;

mongoose.connect(URL).then(()=>{
    app.listen(PORT, ()=>{
        console.log("Backend server is running successfully");
        console.log("DB connection successfully");
    });
}).catch((err)=>{console.log(err)});

