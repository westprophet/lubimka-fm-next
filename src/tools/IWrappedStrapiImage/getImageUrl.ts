import { IWrappedStrapiImage } from 'api/strapi/types';

//Возвращаем урл картиноки
export default function getImageUrl(
  d: IWrappedStrapiImage | null,
  type?: 'large' | 'small' | 'middle'
): string | null {
  let res = null;
  if (!d) return res;
  switch (type) {
    case 'small':
      res = d.data?.attributes.url;
      break;
    case 'middle':
      res = d.data?.attributes.url;
      break;
    case 'large':
      res = d.data?.attributes.url;
      break;
    default:
      res = d.data?.attributes.url;
      break;
  }
  return res;
}
