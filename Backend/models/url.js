import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectedUrl:{
        type:String,
        required:true
    },
    validity:{
        type:Number,
        default: 30 // minutes
    },
    visitHistorty:[
        {
            timestamp:{
                type:Number
            }
        }
    ]
})

const Url = mongoose.model("Url",urlSchema)
export default Url