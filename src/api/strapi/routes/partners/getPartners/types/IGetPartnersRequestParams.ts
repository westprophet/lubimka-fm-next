/***
 * filters
 * https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html#filtering
 */

export type IGetPartnersRequestParams = {
  sort?: string; //'created_at:asc'
  filter?: object; //
  withCompany?: boolean;
};
