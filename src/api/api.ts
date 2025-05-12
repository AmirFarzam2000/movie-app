import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_BASE_URL, 
});

api.interceptors.request.use(
  (config) => {
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

    if (!config.params) {
      config.params = {};
    }

    config.params['api_key'] = apiKey;

    return config;
  },
  (error) => Promise.reject(error) 
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error); 
  }
);

export default api;
