import express from 'express'
import { generateShortUrl} from '../controllers/url.js'
import { getAnalytics } from '../controllers/url.js'
const router = express.Router()

router.route('/shorturls').post(generateShortUrl)
router.route('/shorturls/:shortId').get(getAnalytics)

export default router