import dotenv from "dotenv"
//require('dotenv').config({path:'./env'})
import connectDB from "./db/index.js";
dotenv.config({
    path:'./env'
})
connectDB()










// (async()=>{
//     try{
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     }
//     catch(error)
//     {
//         console.log(error);
//         throw err
//     }
// })()
