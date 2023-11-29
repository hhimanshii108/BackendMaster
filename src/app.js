import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express()
// configuration of cors
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

// jab for se data liya
app.use(express.json({limit : "16kb"}))

//url data keliye
app.use(express.urlencoded({extended:true,limit:"16kb"}))

// images n all config karne ke liye
app.use(express.static("public"))

// cookie
app.use(cookieParser())



export default app;
