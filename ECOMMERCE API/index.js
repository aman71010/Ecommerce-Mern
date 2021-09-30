import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";

dotenv.config();

const app =  express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

const URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 8080;

mongoose.connect(URL).then(()=>{
    app.listen(PORT, ()=>{
        console.log("Backend server is running successfully");
        console.log("DB connection successfully");
    });
}).catch((err)=>{console.log(err)});

