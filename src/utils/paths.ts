// Helper function to get the correct path for assets
// Uses Vite's BASE_URL which is set in vite.config.ts
export const getAssetPath = (path: string): string => {
    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // Get base URL from Vite (will be '/New-Portfolio/' in production, '/' in dev)
    // Fallback to '/New-Portfolio/' if BASE_URL is not available
    const baseUrl = import.meta.env.BASE_URL || '/New-Portfolio/';

    // Ensure baseUrl ends with / for proper concatenation
    const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

    // Return path with base URL
    return `${base}${cleanPath}`;
};
