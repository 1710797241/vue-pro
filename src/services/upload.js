import { AxiosPost } from '../utils/request';
import Apis from './api';
export const commonUpload = data => {
    return AxiosPost(Apis.Upload, data, { 'Content-Type': 'multipart/form-data' });
};
