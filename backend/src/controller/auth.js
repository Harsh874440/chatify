import { generateTocken } from "../lib/utils.js";
import  User from "../models/user.js";
import bcrypt from "bcryptjs";
import { sendWelcomeEmail } from "../emails/emailHandeller.js";
import dotenv from "dotenv"
dotenv.config();

export const signup = async (req,res)=>{
    let {name,email,password} =req.body;
    try{
     if(!name || !email || !password){
        return res.status(400).json({
    message: "All details should be filled"
});
     }

     if(password.length<6){
        res.send("password should be atlest of 6 characters ");
     }
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if (!emailRegex.test(email)) {
     return res.status(400).json({
        message: "Invalid email format"
    });
}
    
    let user =  await User.findOne({email});
    if(user){
        return res.status(400).json({
    message: "User already registered"
});
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword= await bcrypt.hash(password,salt);
    
     const newUser = new User ({
        name,
        email,
        password:hashedPassword,
     })
       await newUser.save();

     if(newUser){
     
         generateTocken(newUser._id,res);
        

         console.log("newuser created",newUser)
         res.status(201).json({
            _id:newUser._id,
            name:newUser.name,
            email:newUser.email,
            
         })
     }
      
      
    await  sendWelcomeEmail(newUser.email,newUser.name,process.env.CLIENT_URL);

} 

    catch(err){
         return res.status(500).json({
    message: "Error while creating user",
    error: err.message
});
    }

}

export const login =async (req,res)=>{
    res.send("loogin route");
}

export const logout=async(req,res)=>{
    res.send("logout route");
}