// const express=require("express");
import express from "express";
import dotenv from"dotenv";
dotenv.config();
import authRouter from "./router/auth.js";
import messageRouter from "./router/message.js";

import {connect} from "./lib/db.js";
const app=express();

app.listen(3000,()=>{
    console.log("server listining to the port 3000 hi");
    connect()
})


app.use(express.json());


app.use("/api/auth" ,authRouter)
app.use("/api/message",messageRouter)
