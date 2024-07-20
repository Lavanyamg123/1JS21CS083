import axios from 'axios';

const API_URL = 'https://your-backend-api.com'; // Replace with your actual backend API URL

export const getProducts = async (filters) => {
  const response = await axios.get(`${API_URL}/products`, { params: filters });
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/products/${id}`);
  return response.data;
};
