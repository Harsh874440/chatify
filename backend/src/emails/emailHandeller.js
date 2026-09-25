import { resendClient  }from "./resend.js";
import dotenv from "dotenv"
dotenv.config();
import { sender } from "./resend.js";
import { createWelcomeEmailTemplate } from "./emailTemplet.js";


export const sendWelcomeEmail= async (email,name,clientUrl) =>{
    try{
   const {data,error}  = await  resendClient.emails.send({
        from:`${sender.name} <${sender.email}>` ,
        to:email,
        subject:"Welcome To Chatify",
        html:createWelcomeEmailTemplate(name, clientUrl),

      })


      if (error) {
            console.log("❌ RESEND ERROR:");
            console.log(error);
            return;
        }

        console.log("✅ EMAIL SENT:");
        console.log(data);

        return data;
     
      
    } catch (err) {
        console.log("❌ EMAIL EXCEPTION:");
        console.log(err);
    }
}