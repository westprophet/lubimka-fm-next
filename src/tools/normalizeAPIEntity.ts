import TStrapiResponseContainer from 'src/api/strapi/types/TStrapiResponseContainer';

export default function normalizeAPIEntity<Type>(obj: TStrapiResponseContainer<Type>): Type {
  return {
    id: obj.id,
    ...obj.attributes,
  };
}
