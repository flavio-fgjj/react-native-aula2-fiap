import axios from 'axios';

const API_KEY = '';
const LANGUAGE = 'pt-BR';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    api_key: API_KEY,
    language: LANGUAGE,
  };

  return config;
});

export default instance;
