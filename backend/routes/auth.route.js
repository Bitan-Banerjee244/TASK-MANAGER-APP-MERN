import express from "express"
import { login, logout, signup } from "../controllers/authControllers.js";

let authRouter = express.Router()

authRouter.post("/signup", signup)
authRouter.post("/login", login)
authRouter.post("/logout", logout)

export default authRouter;