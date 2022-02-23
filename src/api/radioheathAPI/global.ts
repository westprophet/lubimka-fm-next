import axios from 'axios';

const RadioHearthAPI = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export default RadioHearthAPI;
