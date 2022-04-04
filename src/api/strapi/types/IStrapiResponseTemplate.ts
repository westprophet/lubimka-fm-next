import IStrapiMetaData from './IStrapiMetaData';
import IStrapiError from './IStrapiError';

export default interface IStrapiResponseTemplate<Type> {
  data: Type;
  meta?: IStrapiMetaData;
  error?: IStrapiError;
}
