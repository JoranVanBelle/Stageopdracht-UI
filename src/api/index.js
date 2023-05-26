import axiosRoot from "axios";
import config from '../config.json';

const axios = axiosRoot.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || config.base_url
});

export default axios;