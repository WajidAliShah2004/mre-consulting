import express from 'express';
import { getGoogleReviews, getYelpReviews } from '../controllers/reviewController';

const router = express.Router();

router.get('/google', getGoogleReviews);
router.get('/yelp', getYelpReviews);

export default router;
