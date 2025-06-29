import axios from 'axios';
const apiBaseUrl = import.meta.env.VITE_PROPERTY_SERVICE_BASE_URL;
const apiClient = axios.create({
  baseURL: apiBaseUrl //default to property service  
});

apiClient.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token'); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
