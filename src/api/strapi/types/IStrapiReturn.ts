import IStrapiMetaData from './IStrapiMetaData';

//Этот тип мы возвращаем в программу
export default interface IStrapiReturn<T> {
  data: T | null;
  meta?: IStrapiMetaData | null;
}
