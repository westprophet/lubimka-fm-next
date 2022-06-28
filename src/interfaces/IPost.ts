import TStrapiResponseContainer from '../api/strapi/types/TStrapiResponseContainer';
import { IStrapiDataContainer, IWrappedStrapiImage } from 'api/strapi/types';
import { ITeamMember } from 'interfaces/ITeamMember';

interface IPostInner {
  title: string;
  order: number;
  url: string;
  authors: IStrapiDataContainer<ITeamMember>;
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
