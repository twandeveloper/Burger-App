import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-f6c4c.firebaseio.com/'
});

export default instance;