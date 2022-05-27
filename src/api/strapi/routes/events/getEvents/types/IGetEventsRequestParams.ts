import IStrapiRequestBaseParams from '../../../../types/IStrapiRequestBaseParams';

export interface IGetEventsRequestParams extends IStrapiRequestBaseParams {
  search?: string;
  fromDate?: string;
  toDate?: string;
  byClub?: string | number;
}
