import { Router } from 'express';
import contentIndexService from '../services/contentIndexService';

const router = Router();

// Search all content
router.get('/search', (req, res) => {
  try {
    const { q } = req.query;
    
    if (!q || typeof q !== 'string') {
      res.status(400).json({
        success: false,
        message: 'Search query is required'
      });
      return;
    }
    
    const pages = contentIndexService.searchPages(q);
    const services = contentIndexService.searchServices(q);
    
    res.json({
      success: true,
      data: {
        query: q,
        results: {
          pages,
          services,
          totalResults: pages.length + services.length
        }
      }
    });
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({
      success: false,
      message: 'Search failed'
    });
  }
});

// Get all indexed content
router.get('/index', (_req, res) => {
  try {
    const content = contentIndexService.getAllContent();
    res.json({
      success: true,
      data: content
    });
  } catch (error) {
    console.error('Index error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve index'
    });
  }
});

// Get sitemap data
router.get('/sitemap', (_req, res) => {
  try {
    const sitemap = contentIndexService.getSitemapData();
    res.json({
      success: true,
      data: sitemap
    });
  } catch (error) {
    console.error('Sitemap error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve sitemap'
    });
  }
});

// Get all keywords
router.get('/keywords', (_req, res) => {
  try {
    const keywords = contentIndexService.getAllKeywords();
    res.json({
      success: true,
      data: {
        keywords,
        total: keywords.length
      }
    });
  } catch (error) {
    console.error('Keywords error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve keywords'
    });
  }
});

export default router;
