import TStrapiResponseContainer from './TStrapiResponseContainer';

//Может быть одиночный масси или один элемент
type TStrapiResponseData<Type> =
  | TStrapiResponseContainer<Type>[]
  | TStrapiResponseContainer<Type>
  | null;

export default TStrapiResponseData;
