// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fnlkxffpqrffrlovnmys.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZubGt4ZmZwcXJmZnJsb3ZubXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjQ5NzYsImV4cCI6MjA1NTAwMDk3Nn0.1Ova5eln8PKRQJaXi9kqUQdTzWzq5cpKRkxd9bykvsw';

export const supabase = createClient(supabaseUrl, supabaseKey);