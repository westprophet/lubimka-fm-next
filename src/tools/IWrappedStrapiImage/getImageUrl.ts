import { IWrappedStrapiImage } from 'api/strapi/types';

//Возвращаем урл картиноки
export default function getImageUrl(
  d: IWrappedStrapiImage | null,
  type?: 'large' | 'small' | 'middle' | 'thumbnail'
): string | null {
  let res = null;
  if (!d) return res;
  try {
    switch (type) {
      case 'small':
        res = d.data?.attributes.formats.small.url;
        break;
      case 'middle':
        res = d.data?.attributes.formats.middle.url;
        break;
      case 'large':
        res = d.data?.attributes.formats.large.url;
        break;
      case 'thumbnail':
        res = d.data?.attributes.formats.thumbnail.url;
        break;
      default:
        res = d.data?.attributes.url;
        break;
    }
  } catch (e) {
    res = d.data?.attributes.url;
  }
  return res;
}
