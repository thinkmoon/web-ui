import axios, { AxiosRequestConfig } from 'axios';

axios.defaults.withCredentials = true;

function request(options: AxiosRequestConfig): Promise<any> {
  return new Promise((resolve, reject) => {
    axios.defaults.baseURL = useRuntimeConfig().serviceUrl;

    let auth = null;
    if (process.client) {
      auth = useCookie('auth', { domain: 'thinkmoon.cn' });
      if(auth.value && auth.value !== 'undefined'){
        axios.defaults.headers.common['Authorization'] = auth.value;
      }
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
        if (process.client) {
          auth.value = '';
          location.href = '/login';
        }
      }
    });
  });
}

export default request;
