import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image?: string;
  author: string;
  category: string;
  tags: string[];
  status: 'draft' | 'published';
  published_at?: string;
  read_time: number;
  created_at: string;
  updated_at: string;
}

export interface BlogInsert {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image?: string;
  author: string;
  category: string;
  tags: string[];
  status: 'draft' | 'published';
  published_at?: string;
  read_time: number;
}

// White Paper Types
export interface WhitePaper {
  id: string;
  title: string;
  slug: string;
  subtitle?: string;
  description: string;
  pdf_url: string;
  pdf_filename: string;
  category: string;
  tags: string[];
  page_count?: number;
  file_size?: number;
  download_count: number;
  status: 'draft' | 'published' | 'archived';
  published_at?: string;
  created_at: string;
  updated_at: string;
}

export interface WhitePaperInsert {
  title: string;
  slug: string;
  subtitle?: string;
  description: string;
  pdf_url: string;
  pdf_filename: string;
  category: string;
  tags: string[];
  page_count?: number;
  file_size?: number;
  status: 'draft' | 'published' | 'archived';
  published_at?: string;
}

// Helper function to download white paper from Supabase
export const downloadWhitePaper = async (paperId: string, filename: string): Promise<void> => {
  try {
    // Get the white paper details
    const { data: paper, error: fetchError } = await supabase
      .from('white_papers')
      .select('pdf_url, pdf_filename')
      .eq('id', paperId)
      .single();

    if (fetchError) throw fetchError;
    if (!paper) throw new Error('White paper not found');

    // Increment download count
    await supabase.rpc('increment_download_count', { paper_id: paperId });

    // Download the file
    const response = await fetch(paper.pdf_url);
    const blob = await response.blob();
    
    // Create download link
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || paper.pdf_filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading white paper:', error);
    throw error;
  }
};
