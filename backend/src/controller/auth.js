import  User from "../models/user.js";
import bcrypt from "bcryptjs";

export const signup = async (req,res)=>{
    let {name,email,password} =req.body;
    try{
     if(!name || !email || !password){
        res.send("404 all the details should be filled");
     }

     if(password<6){
        res.send("password should be atlest of 6 characters ");
     }
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if (!emailRegex.test(email)) {
     return res.status(400).json({
        message: "Invalid email format"
    });
    
    let user =  await User.findOne({email});
    if(user){
        res.status("400" ,json({message :"user already registered"}));
    }

    const salt =bcrypt.genSalt(10);
    const hashedPassword=bcrypt.hash(password,salt);
    
     const newUser = new User ({
        name,
        email,
        password:hashedPassword,
     })
     

     if(newUser){
     

         await newUser.save();
     }else{
        res.send("erroe making the user ");
     }
} 
    }catch(err){

    }
}


export const login =async (req,res)=>{
    res.send("loogin route");
}

export const logout=async(req,res)=>{
    res.send("logout route");
}