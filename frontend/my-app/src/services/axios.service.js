import axios from "axios";


const baseURL = 'http://localhost:8081';


const axiosService = axios.create({
    baseURL
});

export default axiosService;