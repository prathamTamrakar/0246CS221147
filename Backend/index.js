import express from 'express'
import { connectToMongoDB } from './db/connect.js'
import 'dotenv/config'
const app = express()
const PORT = 3000

app.use(express.urlencoded({extended: false}))
app.use(express.json())

connectToMongoDB(`${process.env.MONGODB_URI}/newShortUrl`)
.then(()=>console.log("Mongo DB is connected"))



app.listen(PORT,()=>{
    console.log(`Server is running on the port: ${PORT}`)
})