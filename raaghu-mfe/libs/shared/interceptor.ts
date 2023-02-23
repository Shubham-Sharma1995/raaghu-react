import axios from 'axios';


const instance = axios.create({
  // baseURL: 'https://abpdemoapi.raaghu.io/',
  baseURL: 'https://localhost:44347',
  // baseURL: process.env.REACT_APP_API_URL,
});

instance.interceptors.request.use((config) => {
  let token = localStorage.getItem('access_token');
  if(token){
    var Token = JSON.parse(token) 
  }
  

  if (token) {
    config.headers.Authorization = `Bearer ${Token}`;
  }

  return config;
});

export default instance;


