import express from 'express';
import { body } from 'express-validator';
import { subscribe, unsubscribe } from '../controllers/newsletterController';
import { formLimiter } from '../middleware/rateLimiter';

const router = express.Router();

router.post(
  '/subscribe',
  formLimiter,
  [
    body('email').isEmail().normalizeEmail().withMessage('Valid email is required')
  ],
  subscribe
);

router.post(
  '/unsubscribe',
  [
    body('email').isEmail().normalizeEmail().withMessage('Valid email is required')
  ],
  unsubscribe
);

export default router;
