import { IWrappedStrapiImage } from 'api/strapi/types';

//Возвращаем урл картиноки
export default function getImageUrl(d: IWrappedStrapiImage | null): string | null {
  if (d) return d.data?.attributes.url;
  return null;
}
