export const ENV = {
  APP_NAME: import.meta.env.VITE_APP_NAME || "My App",
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
  JWT_SECRET_KEY: import.meta.env.VITE_JWT_SECRET_KEY || "default-secret",
};
