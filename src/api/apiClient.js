import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://property-service-raoo.onrender.com/api/' 
//   headers: {
//     'Content-Type': 'application/json',
//   },
});

export default apiClient;
