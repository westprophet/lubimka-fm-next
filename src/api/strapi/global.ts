import axios from 'axios';

import qs from 'qs';

const StrapiAxios = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_STRAPI_REMOTE_API == '1'
      ? process.env.NEXT_PUBLIC_STRAPI_URL_BASE
      : process.env.NEXT_PUBLIC_STRAPI_URL_BASE_DEV,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: function (params) {
    //Для страпи делаем особую сериализацию
    return qs.stringify(params, {
      encodeValuesOnly: true,
    });
  },
});

export default StrapiAxios;
