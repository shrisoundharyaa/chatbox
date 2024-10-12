import axios from 'axios';

const API_URL = 'http://localhost:5000/api/posts';

export const fetchPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createPost = async (postData) => {
  const response = await axios.post(`${API_URL}/create`, postData);
  return response.data;
};
