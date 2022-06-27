import TStrapiResponseContainer from '../api/strapi/types/TStrapiResponseContainer';
import { IWrappedStrapiImage } from 'api/strapi/types';

interface IBlogCategoryInner {
  title: string;
  order: number;
  url?: string;
  cover: IWrappedStrapiImage;
}

export type IBlogCategory = TStrapiResponseContainer<IBlogCategoryInner>;
