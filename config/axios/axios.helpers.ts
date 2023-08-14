export const getEnvironmentUrl = (): "production" | "development" => {
  if (process.env.NODE_ENV === "production") {
    return import.meta.env.VITE_API_URL_PROD;
  }
  return import.meta.env.VITE_API_URL_DEV;
};
