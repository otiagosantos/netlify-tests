import axios from 'axios';

const port = process.env.REACT_APP_SERVER_PORT;

export const api = axios.create({
    baseURL: `http://localhost:${port}/`
});
