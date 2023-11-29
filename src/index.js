import dotenv from "dotenv"
//require('dotenv').config({path:'./env'})
import connectDB from "./db/index.js";
dotenv.config({
    path:'./env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port ${process.env.PORT}`);
    })
})
.catch(()=>{
    console.log("mongo db connection falied");
})










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
