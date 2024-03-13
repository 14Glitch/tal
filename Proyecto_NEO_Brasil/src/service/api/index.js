import axios from 'axios';
//import Config from '../../config';

// axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const apiNeo = axios.create({
    baseURL: "https://20arn6e6dj.execute-api.us-east-1.amazonaws.com"
});

const apiLoginNeo = axios.create({
    baseURL: "https://9097yffrd7.execute-api.us-east-1.amazonaws.com"
});

const apiMediquo = axios.create({
    baseURL: "https://tsul.net.br",
    headers: {
        'X-API-Key': 'ybmed9ve3oq7xVxS',
        'X-Secret-Key': '1G10VPDhzfbic6CCk1KdjlFQD5xzLXM9d4lGZ9RHPjX7kJrqb1w9ioDqbtqEBgJk',
    }
});

export {
  apiNeo,
  apiLoginNeo,
  apiMediquo
};

// axios.interceptors.request.use(
//   function (config) {

//     config.headers.Authorization = `Bearer ${your_token}`;
//     config.baseURL = Config.api.baseUrl.mediquo;

//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// export default {
//   get: axios.get,
//   post: axios.post,
//   put: axios.put,
//   delete: axios.delete,
//   patch: axios.patch
// };