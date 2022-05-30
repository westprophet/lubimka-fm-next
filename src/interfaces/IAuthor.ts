import { IAlbum } from './IAlbum';
import TStrapiResponseContainer from 'api/strapi/types/TStrapiResponseContainer';
import ISocial from './others/ISocial';
import { IWrappedStrapiImage } from 'api/strapi/types';

export interface IAuthorInner {
  name: string;
  description: string;
  albums: IAlbum[];
  createdAt: string;
  updatedAt: string;
  socials: ISocial[];
  avatar: IWrappedStrapiImage;
}

export type IAuthor = TStrapiResponseContainer<IAuthorInner>;
