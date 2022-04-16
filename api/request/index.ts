import axios, { AxiosRequestConfig } from 'axios';

function request(options: AxiosRequestConfig) {
  return new Promise((resolve, reject) => {
    axios.defaults.baseURL = useRuntimeConfig().baseUrl;
    if (!process.server) {
      axios.defaults.headers.common['Authorization'] = useCookie('auth').value;
    }
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
