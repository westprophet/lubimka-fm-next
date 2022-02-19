import IStrapiMetaData from './IStrapiMetaData';
import IStrapiError from './IStrapiError';
import TStrapiResponseData from './TStrapiResponseData';

export default interface IStrapiResponseTemplate<Type> {
  data: TStrapiResponseData<Type>;
  meta?: IStrapiMetaData;
  error?: IStrapiError;
}
