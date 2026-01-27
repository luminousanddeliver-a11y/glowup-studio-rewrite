/**
 * Calculate estimated reading time from HTML content
 * Average reading speed: 200-250 words per minute
 */
export const calculateReadingTime = (htmlContent: string): number => {
  if (!htmlContent) return 1;
  
  // Strip HTML tags to get plain text
  const plainText = htmlContent.replace(/<[^>]*>/g, ' ');
  
  // Count words (split by whitespace and filter empty strings)
  const words = plainText.split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;
  
  // Average reading speed: 225 words per minute
  const wordsPerMinute = 225;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  
  // Minimum 1 minute
  return Math.max(1, readingTime);
};

/**
 * Get word count from HTML content
 */
export const getWordCount = (htmlContent: string): number => {
  if (!htmlContent) return 0;
  
  const plainText = htmlContent.replace(/<[^>]*>/g, ' ');
  const words = plainText.split(/\s+/).filter(word => word.length > 0);
  
  return words.length;
};
