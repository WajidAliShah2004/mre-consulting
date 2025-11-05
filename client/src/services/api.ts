import axios from 'axios';
import type {
  QuoteRequest,
  ContactForm,
  NewsletterSubscription,
  BlogPost,
  Testimonial,
  ApiResponse
} from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Quote Requests
export const submitQuoteRequest = async (data: QuoteRequest): Promise<ApiResponse<any>> => {
  const response = await api.post('/quotes', data);
  return response.data;
};

// Contact Form
export const submitContactForm = async (data: ContactForm): Promise<ApiResponse<any>> => {
  const response = await api.post('/contact', data);
  return response.data;
};

// Newsletter
export const subscribeNewsletter = async (data: NewsletterSubscription): Promise<ApiResponse<any>> => {
  const response = await api.post('/newsletter/subscribe', data);
  return response.data;
};

// Blog
export const getBlogPosts = async (params?: {
  category?: string;
  tag?: string;
}): Promise<ApiResponse<BlogPost[]>> => {
  const response = await api.get('/blog', { params });
  return response.data;
};

export const getBlogPost = async (slug: string): Promise<ApiResponse<BlogPost>> => {
  const response = await api.get(`/blog/${slug}`);
  return response.data;
};

// Reviews
export const getGoogleReviews = async (): Promise<ApiResponse<Testimonial[]>> => {
  const response = await api.get('/reviews/google');
  return response.data;
};

export const getYelpReviews = async (): Promise<ApiResponse<Testimonial[]>> => {
  const response = await api.get('/reviews/yelp');
  return response.data;
};

// AI Chat
export const sendChatMessage = async (message: string, conversationHistory?: any[]): Promise<ApiResponse<any>> => {
  const response = await api.post('/ai-chat/message', { message, conversationHistory });
  return response.data;
};

export default api;
