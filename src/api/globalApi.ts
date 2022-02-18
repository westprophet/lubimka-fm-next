import axios from 'axios';

export const Axios = axios.create({
  baseURL: `https://api.lubimka.redw.me/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});
