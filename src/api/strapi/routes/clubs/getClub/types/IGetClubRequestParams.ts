import IStrapiRequestBaseParams from '../../../../types/IStrapiRequestBaseParams';

export interface IGetClubRequestParams extends IStrapiRequestBaseParams {
  id: string | string[] | undefined;
  withRecomendedEvents?: boolean;
}
