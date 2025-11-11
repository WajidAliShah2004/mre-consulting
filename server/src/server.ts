import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { testConnection } from './config/supabase';
import { verifyEmailConfig } from './services/emailService';
import { errorHandler } from './middleware/errorHandler';
import { notFound } from './middleware/notFound';

// Load environment variables
dotenv.config();

// Initialize express app
const app: Application = express();

// Trust proxy - Required for Railway/Heroku/etc behind reverse proxy
app.set('trust proxy', 1);

// Test Supabase connection
testConnection();

// Verify email configuration
verifyEmailConfig();

// Middleware
app.use(helmet());

// CORS configuration - handle multiple origins
const allowedOrigins = process.env.CLIENT_URL 
  ? process.env.CLIENT_URL.split(',').map(url => url.trim())
  : ['http://localhost:5173'];

app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));
app.use(compression());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// API Routes
import contactRoutes from './routes/contactRoutes';
import quoteRoutes from './routes/quoteRoutes';
import newsletterRoutes from './routes/newsletterRoutes';
import reviewRoutes from './routes/reviewRoutes';
import blogRoutes from './routes/blogRoutes';
import aiChatRoutes from './routes/aiChatRoutes';
import searchRoutes from './routes/searchRoutes';

app.use('/api/contact', contactRoutes);
app.use('/api/quotes', quoteRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/ai-chat', aiChatRoutes);
app.use('/api', searchRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});

export default app;
