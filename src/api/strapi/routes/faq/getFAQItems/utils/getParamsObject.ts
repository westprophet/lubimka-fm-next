/***
 *
 *   https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html
 *   Формируем параметры для запроса на основе переданных аргументов
 */

export default function getParamsObject() {
  return {
    pagination: {
      limit: 100,
      start: 0,
    },
  };
}
