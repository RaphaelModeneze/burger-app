import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-50116.firebaseio.com/'
});

export default instance;