import express from 'express'
import dotenv from "dotenv";
dotenv.config("path=./.env");
import connectMongoDB from './db/mongo.js';
const app = express()
const port = process.env.PORT || 3000

connectMongoDB()
.then(() => {
    app.on("error",(err) => {
        console.error("Server error:", err)
        throw err
    })
    app.listen(port, () => {
        console.log(`Server at http://localhost:${port}`)
    })
})
.catch((error) => {
  console.error("MongoDB connection error:", error)
  process.exit(1)
})

