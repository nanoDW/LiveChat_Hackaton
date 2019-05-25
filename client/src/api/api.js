import axios from 'axios';

const api = axios.create({
    baseURL: '',
    options: {
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Credentials": "true"
    },
});

export default api;