import axios from 'axios';
import {Restaurant} from './types';

const client = axios.create({
  baseURL:
    'https://outside-in-dev-api.herokuapp.com/KXPQJunQouNkzJwgIfQrAIbF1do7oESx',
});

export type API = {
  loadRestaurants: () => Promise<Array<Restaurant>>;
};

const api: API = {
  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data);
  },
};

export default api;
