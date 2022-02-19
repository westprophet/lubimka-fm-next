import TStrapiResponseContainer from './TStrapiResponseContainer';

type TStrapiResponseData<Type> =
  | TStrapiResponseContainer<Type>[]
  | TStrapiResponseContainer<Type>
  | null;

export default TStrapiResponseData;
