import dotenv from "dotenv"

import {app} from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
})

const PORT=process.env.PORT || 7000

connectDB() 
// connect Mongodb is not a funtion is occur due to after mongo use mis ()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGODB connection error ",err)
})