import express from "express";
import { signup } from "../controller/auth.js";
import { login } from "../controller/auth.js";
import { logout } from "../controller/auth.js";
import { isLogin } from "../middelware/auth.js";
import { update } from "../controller/auth.js";
const router = express.Router();


router.post("/login",login );
router.post("/logout" ,logout );


router.post("/signup",signup );
router.put("/update",isLogin,update)


export default router;