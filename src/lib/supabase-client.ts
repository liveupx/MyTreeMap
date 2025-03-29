
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with public anon key
// Using demo/development mode credentials to make the UI functional
// This creates a demo Supabase client that works without actual credentials
export const supabase = createClient(
  'https://demo.supabase.co', // Using demo URL to ensure UI functions
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.demo-key', // Demo key
  {
    auth: {
      persistSession: false, // Don't persist session in development/demo mode
    },
  }
);

// Function to upload image to Supabase Storage (mocked for demo)
export const uploadImage = async (file: File, bucket: string, path: string) => {
  try {
    console.log('Upload image called with:', { file, bucket, path });
    
    // For demo, return a mock URL
    return `https://demo-storage.supabase.co/${bucket}/${path}/${file.name}`;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

// Function to submit contact form to Supabase database (mocked for demo)
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    // For demo purposes, log the form data
    console.log('Submitting form data:', formData);
    
    // Return mock successful response
    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};
