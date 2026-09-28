import  User from "../models/user.js";
import dotenv from "dotenv"
dotenv.config();
import { generateTocken } from "../lib/utils.js";
import jwt from "jsonwebtoken";


export const isLogin =async(req,res,next)=>{
    try{
const tocken= req.cookie.jwt

if(!tocken){
    return res.status(401).json({message:"no tocken exist"})
}

let decoded  =jwt.verify(tocken,process.env.JWT_SECRET);
if(!decoded){
    return res.status(401).json({message:"not verified not the correct tocken "})
}
let user =await User.findById(decoded.userid);
req.user=user;
next();

    }
    catch(err){

    }
}
