/***
 * filters
 * https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html#filtering
 *
 * pagination
 * https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/sort-pagination.html#sort-using-2-fields-and-set-the-order
 *
 * Тут указаны параметры, которые могут быть указаны для любого запроса по выборке элементов (не одного элемента, а нескольких) к страпи
 */

export default interface IStrapiRequestBaseParams {
  sort?: string; //'created_at:asc'
  filter?: object; //
  pagination?: IStrapiRequestPagination | IStrapiRequestLimit;
}

export interface IStrapiRequestPagination {
  page: number;
  pageSize?: number;
}

export interface IStrapiRequestLimit {
  limit?: number;
  start: number;
}
