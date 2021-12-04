import apiConfig from './apiConfig';
import axios from 'axios';

const api = axios.create({
	baseURL: apiConfig.apiUrl
});

export default api;