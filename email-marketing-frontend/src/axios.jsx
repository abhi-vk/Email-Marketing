import axios from 'axios';

// Create an Axios instance with base URL pointing to the backend API
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // Backend URL
});

export default axiosInstance;
