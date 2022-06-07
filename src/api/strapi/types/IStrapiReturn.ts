import IStrapiMetaData from './IStrapiMetaData';
import IStrapiError from './IStrapiError';

export default interface IStrapiReturn<Type> {
  data: Type;
  meta?: IStrapiMetaData | null;
  error?: IStrapiError;
}
