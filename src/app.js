import express from "express"

import cors from "cors"


const app=express()

// “Jab bhi koi request server me aati hai, middleware us request ko check, verify, modify karke aage bhejta hai.”

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
)
//common middleware
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))



export {app}