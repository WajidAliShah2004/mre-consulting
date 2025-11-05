import express from 'express';
import { body } from 'express-validator';
import { createQuote, getAllQuotes } from '../controllers/quoteController';
import { formLimiter } from '../middleware/rateLimiter';

const router = express.Router();

router.post(
  '/',
  formLimiter,
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
    body('phone').trim().notEmpty().withMessage('Phone is required'),
    body('service').notEmpty().withMessage('Service is required'),
    body('message').trim().notEmpty().withMessage('Message is required')
  ],
  createQuote
);

router.get('/', getAllQuotes);

export default router;
