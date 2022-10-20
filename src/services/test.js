import { AxiosPostJson, AxiosPutJson } from '../utils/request';

export const testJson = (url, data) => {
    return AxiosPutJson(url, data);
};
