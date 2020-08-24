import axios from 'axios';

axios.defaults.withCredentials = true;

const instance = axios.create({
  timeout: 60000,
});

const request = (method, url, data) => {
  const defaultHeaders = {
  };
  const requestConfig = {
    method,
    url,
    headers: defaultHeaders,
  };
  if (method === 'get') {
    return instance.request({ ...requestConfig, params: data });
  }
  return instance.request({ ...requestConfig, data });
};

const requestApi = method => (endpoint, data) => request(method, endpoint, data);

const get = requestApi('get');
const post = requestApi('post');
const put = requestApi('put');
const del = requestApi('delete');

// const errorHandler = async (error) => {
//   if (error && error.response && error.response.data) {
//     if (error.response.data.status === 4 || error.response.data.status === 5) {
//       const userId = window.localStorage.getItem('userId');
//       const accessTokenResponse = userId ? await getAccessToken({ userId, isRefresh: true }) : null;
//       if (accessTokenResponse.status === 'success') {
//         return request(error.config.method, error.config.url, error.config.data);
//       }
//       window.localStorage.clear();
//       window.sessionStorage.clear();
//       window.location.href = '/';
//     }
//   }
//   return Promise.reject(error);
// };

// const successHandler = (response) => {
//   return response;
// };

// instance.interceptors.response.use(
//   response => successHandler(response),
//   error => errorHandler(error),
// );

export {
  get, post, put, del,
};
