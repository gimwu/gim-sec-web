import Axios from 'axios'
import Router from '../router/index'
const service = Axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    withCredentials: false,
    timeout: 50000 // request timeout
})


service.interceptors.request.use(
    config => {
        const token = localStorage.getItem('Authorization')
        token ? config.headers.Authorization = token : null;
        console.log(config);
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.data.code == 401) {
        Router.replace('/admin-login')
    }
    return Promise.reject(error);
});


export default service
