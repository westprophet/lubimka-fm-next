import TStrapiResponseContainer from '../api/strapi/types/TStrapiResponseContainer';
import { IWrappedStrapiImage } from 'api/strapi/types';

interface IPostInner {
  title: string;
  order: number;
  url: string;
  createdAt: string;
  timeRead: string | null;
  cover: IWrappedStrapiImage;
}

interface IPostDetailInner {
  title: string;
  content: string;
  order: number;
  category: [];
  url: string;
  timeRead: string | null;
  cover: IWrappedStrapiImage;
}

export type IPost = TStrapiResponseContainer<IPostInner>;
export type IPostDetail = TStrapiResponseContainer<IPostDetailInner>;
