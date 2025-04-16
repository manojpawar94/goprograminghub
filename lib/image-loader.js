/**
 * Custom image loader for Next.js static export
 * This loader returns the src unchanged, which works with static exports
 * @param {Object} params - The image parameters
 * @param {string} params.src - The source URL of the image
 * @param {number} params.width - The requested width of the image
 * @param {number} params.quality - The requested quality of the image
 * @returns {string} - The processed image URL
 */
export default function customImageLoader({ src, width, quality }) {
  // For static exports, we just return the original src
  // This ensures images work properly with next export
  return src;
}