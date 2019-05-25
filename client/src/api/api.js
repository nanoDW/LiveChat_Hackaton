import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/http://localhost:3001/api/posts',
    options: {
        
    },
});

export default api;