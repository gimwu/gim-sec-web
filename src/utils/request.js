import Axios from 'axios'

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


export default service
