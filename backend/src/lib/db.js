import mongoose from "mongoose";


 export const connect =  async () =>{
   const conn= await mongoose.connect(process.env.MONGO_URL);
    console.log("mongoose connected");
}

