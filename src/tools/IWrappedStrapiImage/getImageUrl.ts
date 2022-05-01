import { IWrappedStrapiImage } from '../../api/strapi/types/IStrapiImage';

//Возвращаем урл картиноки
export default function getImageUrl(d: IWrappedStrapiImage): string | null {
  if (d) return d.data?.attributes.url;
  return null;
}
