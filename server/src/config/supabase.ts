import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables first
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('SUPABASE_URL:', supabaseUrl);
  console.error('SUPABASE_SERVICE_KEY:', supabaseServiceKey ? 'exists' : 'missing');
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

// Create Supabase client with service role key for server-side operations
export const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

// Test connection
export const testConnection = async (): Promise<void> => {
  try {
    const { error } = await supabase.from('contacts').select('count', { count: 'exact', head: true });
    if (error) throw error;
    console.log('✅ Supabase Connected Successfully');
  } catch (error) {
    console.error('❌ Supabase Connection Error:', error instanceof Error ? error.message : 'Unknown error');
  }
};
