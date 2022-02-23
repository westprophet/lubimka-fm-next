import axios from 'axios';

const StrapiAxios = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_STRAPI_REMOTE_API == '1'
      ? process.env.NEXT_PUBLIC_STRAPI_URL_BASE
      : process.env.NEXT_PUBLIC_STRAPI_URL_BASE_DEV,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default StrapiAxios;
