import { AxiosPost, AxiosGet } from '../utils/request';
import Apis from './api';
export const commonUpload = data => {
    return AxiosPost(Apis.Upload, data, { headers: { 'Content-Type': 'multipart/form-data' } });
};

export const commonDownload = (url, data) => {
    return AxiosGet(url, data, { responseType: 'blob' });
};
