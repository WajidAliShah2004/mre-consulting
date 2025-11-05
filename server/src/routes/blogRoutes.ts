import express from 'express';
import { getAllPosts, getPostBySlug, getPostById, createPost, updatePost, deletePost } from '../controllers/blogController';

const router = express.Router();

router.get('/', getAllPosts);
router.get('/id/:id', getPostById);
router.get('/:slug', getPostBySlug);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
