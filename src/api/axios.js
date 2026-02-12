import axios from 'axios';

const api = axios.create({
    baseURL: (import.meta.env.VITE_API_URL || 'https://porfolio-shaharman-backend.onrender.com') + '/api',
    withCredentials: true,
    timeout: 60000 // 60 seconds to allow Render "cold start"
});

export default api;
