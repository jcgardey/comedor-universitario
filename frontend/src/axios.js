import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000'
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.interceptors.request.use(config => {
  if (localStorage.getItem('token')) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return config;
});

export default instance;