import axios from 'axios';

export const Axios = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_REMOTE_API == '1'
      ? process.env.NEXT_PUBLIC_API_BASE_PROD
      : process.env.NEXT_PUBLIC_API_BASE_DEV,
  headers: {
    'Content-Type': 'application/json',
  },
});
export default Axios;
