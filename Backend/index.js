import express from 'express';
import bodyParser  from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./Routes/userRoute.js";
import cors from 'cors';
const app=express();

<<<<<<< HEAD
app.use(cors());
=======
app.use(cors);
>>>>>>> cbe5dac51dfd0c76d4aab55bdbe13f42e7f20d55
app.use(bodyParser.json());
dotenv.config();

const PORT=process.env.PORT || 8000 ;
const MONGOURL = process.env.MONGOURL;
app.use('/api/user',router)

mongoose
    .connect(MONGOURL)
    .then(()=>{
    console.log("Database Connected");
    app.listen(PORT,()=>{
        console.log(`Connected PORT Number ${PORT}`)
    });
})