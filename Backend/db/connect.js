import mongoose from "mongoose";

export async function connectToMongoDB(url){
    try {
        await mongoose.connect(url)
    } catch (error) {
        console.error(error);
    }
}