import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5001/api/' 
});

apiClient.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token'); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
