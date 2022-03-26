import axios, { AxiosRequestConfig } from 'axios';

axios.defaults.baseURL = 'https://service.thinkmoon.cn/api';
// axios.defaults.baseURL = 'http://127.0.0.1:9447/api';
if (!process.server) {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
}

function request(options: AxiosRequestConfig) {
  return new Promise((resolve, reject) => {
    axios(options).then(res => {
      if (res?.data?.code === 200) {
        resolve(res.data?.data);
      } else {
        reject(res);
      }
    }).catch(err => {
      console.error(err);
      if (Number(err.response?.status) === 401) {
        location.href = '/login';
      }
    });
  });
}

export default request;
