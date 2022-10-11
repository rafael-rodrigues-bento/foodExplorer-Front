import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://foodexplorer-server.herokuapp.com'
});
