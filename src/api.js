import axios from 'axios';

const API_URL = 'http://localhost:5000/api';
const STATIC_URL = 'http://localhost:5000/static';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authorsAPI = {
  getAll: () => api.get('/authors'),
  getById: (id) => api.get(`/authors/${id}`),
};
export const postsAPI = {
  getAll: () => api.get('/posts'),
  getById: (id) => api.get(`/posts/${id}`),
};

// ДОБАВЬТЕ ЭТУ ФУНКЦИЮ
export const getImageUrl = (filename) => {
  if (!filename) {
    console.log('getImageUrl: filename is null or undefined');
    return null;
  }
  const url = `http://localhost:5000/static/${filename}`;
  console.log('getImageUrl:', url);
  return url;
};


export default api;