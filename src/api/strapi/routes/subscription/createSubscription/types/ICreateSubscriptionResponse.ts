import IStrapiReturn from '../../../../types/IStrapiReturn';

export type ICreateSubscriptionResponse = IStrapiReturn<{
  email: string;
  name: string;
}>;
