import express from 'express';
import { body } from 'express-validator';
import { sendMessage } from '../controllers/aiChatController';
import { apiLimiter } from '../middleware/rateLimiter';

const router = express.Router();

router.post(
  '/message',
  apiLimiter,
  [
    body('message').trim().notEmpty().withMessage('Message is required')
  ],
  sendMessage
);

export default router;
