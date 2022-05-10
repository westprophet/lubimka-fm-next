import IStrapiRequestBaseParams from '../../../../types/IStrapiRequestBaseParams';

export interface IGetEventsRequestParams extends IStrapiRequestBaseParams {
  fromDate?: string;
  toDate?: string;
}
