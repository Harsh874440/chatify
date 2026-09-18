// const express=require("express");
import express from "express";
import dotenv from"dotenv";
import authRouter from "./router/auth.js";
import messageRouter from "./router/message.js";
const app=express();

app.listen(3000,()=>{
    console.log("server listining to the port 3000 hi");
})


app.use("/api/auth" ,authRouter)
app.use("/api/message",messageRouter)
