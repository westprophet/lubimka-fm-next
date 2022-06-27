import IStrapiRequestBaseParams from '../../../../types/IStrapiRequestBaseParams';

export interface IGetPostsRequestParams extends IStrapiRequestBaseParams {
  search?: string;
  categoryId?: number;
}
