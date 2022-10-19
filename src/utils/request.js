import Axios from 'axios';
import QueryString from 'qs';
import { BaseUrl } from './constants';
import { Message } from 'element-ui';

const AxiosRequest = Axios.create({
    baseURL: BaseUrl,
    timeout: 1000,

    // `withCredentials` indicates whether or not cross-site Access-Control requests
    // should be made using credentials
    withCredentials: false, // default
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
    // `paramsSerializer` is an optional function in charge of serializing `params`
    // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
    // paramsSerializer: function (params) {
    //     console.log('params', params);
    //     return QueryString.stringify(params, { arrayFormat: 'repeat' });
    // }
});

AxiosRequest.interceptors.request.use(
    config => {
        console.log('AxiosRequest.interceptors.request', config);
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
AxiosRequest.interceptors.response.use(
    response => {
        console.log('AxiosRequest.interceptors.response', response);
        Message.error(response.data.message);
    },
    error => {
        return Promise.reject(error);
    }
);
const AxiosPost = (url, data, headers = {}) => {
    return AxiosRequest.post(url, data, { headers });
};
const AxiosPostJson = (
    url,
    data,
    headers = { 'Content-Type': 'application/json;charset=UTF-8' }
) => {
    return AxiosRequest.post(url, data, { headers });
};
const AxiosPut = (url, data, headers = {}) => {
    return AxiosRequest.post(url, data, { headers });
};
const AxiosPutJson = (
    url,
    data,
    headers = { 'Content-Type': 'application/json;charset=UTF-8' }
) => {
    return AxiosRequest.put(url, data, { headers });
};
const AxiosGet = (url, params, headers = {}) => {
    return AxiosRequest.get(url, { params }, { headers });
};
const AxiosDelete = (url, data, headers = {}) => {
    return AxiosRequest.delete(url, data, { headers });
};
export { AxiosPost, AxiosPostJson, AxiosPut, AxiosPutJson, AxiosGet, AxiosDelete };
