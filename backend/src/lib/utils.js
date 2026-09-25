import jwt from "jsonwebtoken";


export async function  generateTocken (userid,res) {
    const tocken = jwt.sign({userid} ,process.env.JWT_SECRET,{expiresIn:"7d",});

    res.cookie("jwt",tocken,{
        maxAge:7*24*60*60*1000,
        httpOnly:true,
    })

    return tocken;
};

