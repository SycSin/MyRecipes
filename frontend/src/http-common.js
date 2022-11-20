import axios from "axios"

// https://codeburst.io/create-http-client-instance-with-axios-in-vue-da8c12c779c2

export default ({ requiresAuth = false } = {}) => {
    const options = {};

    options.baseURL = 'http://localhost:8081/';
    options.headers.post['Content-Type'] = 'multipart/form-data';

    // Bearer?
    if (requiresAuth) {
        options.headers.Authorization = 'JWT TOKEN'
    }
    const instance = axios.create(options);
    return instance;

}