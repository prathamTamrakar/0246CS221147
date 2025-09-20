import { nanoid } from "nanoid";
import Url from '../models/url.js'

export async function generateShortUrl(req,res){
    const {url,validity,shortCode} = req.body

    if(!url){
        return res.status(400).json({
            message: "url is required"
        })
    }

    if(!shortCode){
        try {
            shortCode = nanoid(8)
        } catch (error) {
            return res.status(500).json({
            message: "Internal server error"
        })
        }
        
    }

    await Url.create({
        shortId: shortCode,
        redirectedUrl: url,
        visitedHistory: [],
        validity: validity || 30
    })

    return res.status(201).json({
        shortLink: `http://localhost:3000/${shortCode}`,
        expiry: `${Date.now() + (validity || 30) * 60000}`
    })
}



export async function getAnalytics(req,res){
    const shortId = req.params.shortId
    const entry = await Url.findOne({
        shortId
    })
    return res.status(200).json({
        entry
    })
}