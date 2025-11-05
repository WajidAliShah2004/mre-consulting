import express from 'express';
import { body } from 'express-validator';
import { createContact } from '../controllers/contactController';
import { formLimiter } from '../middleware/rateLimiter';

const router = express.Router();

router.post(
  '/',
  formLimiter,
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
    body('subject').trim().notEmpty().withMessage('Subject is required'),
    body('message').trim().notEmpty().withMessage('Message is required')
  ],
  createContact
);

export default router;
