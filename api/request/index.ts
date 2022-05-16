import axios, { AxiosRequestConfig } from 'axios';

function request(options: AxiosRequestConfig) {
  return new Promise((resolve, reject) => {
    axios.defaults.baseURL = useRuntimeConfig().baseUrl;
    let auth = null;
    if (process.client) {
      auth = useCookie('auth');
      axios.defaults.headers.common['Authorization'] = auth.value;
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
        auth.value = null;
        location.href = '/login';
      }
    });
  });
}

export default request;
