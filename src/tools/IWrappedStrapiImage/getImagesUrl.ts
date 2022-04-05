import IStrapiImage, { IWrappedStrapiImages } from '../../interfaces/IStrapiImage';
import TStrapiResponseContainer from '../../api/strapi/types/TStrapiResponseContainer';

//Возвращаем урлы картинок
export default function getImagesUrl(d: IWrappedStrapiImages): string[] | null {
  if (Array.isArray(d))
    return d.map((i: TStrapiResponseContainer<IStrapiImage>) => i.attributes.url);
  return null;
}
