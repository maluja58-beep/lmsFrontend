// Centralized API configuration
// The base URL is read from the VITE_API_URL environment variable.
// - Development: defaults to http://localhost:3000 (set in .env)
// - Production: set via GitHub Secrets / Azure environment

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default API_URL;
