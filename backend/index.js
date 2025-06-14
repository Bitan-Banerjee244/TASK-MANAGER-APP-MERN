import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import connectDB from "./config/db.js"
import authRouter from "./routes/auth.route.js"
import taskRouter from "./routes/task.route.js"
dotenv.config()

const app = express()

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true
}))

app.use(cookieParser())
app.use(express.json())
app.use("/api/v2",authRouter)
app.use("/api/v2",taskRouter)

app.get("/", (req, res) => {
    return res.send("Server Started")
})

app.listen(process.env.PORT, () => {
    connectDB()
    console.log(`Server Started at localhost:${process.env.PORT}`)
})