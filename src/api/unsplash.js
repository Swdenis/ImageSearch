import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID v27_Z4HcFis5UPQOZVrVijQaLdduCQhWSBMpS6GHlGA'
    }
});