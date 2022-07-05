import { IAlbum } from './IAlbum';
import TStrapiResponseContainer from 'api/strapi/types/TStrapiResponseContainer';
import ISocial from './others/ISocial';
import { IWrappedStrapiImage } from 'api/strapi/types';
import { ITrack } from 'interfaces/ITrack';
import TWrappedData from '../types/TWrappedData';

export interface IAuthorInner {
  name: string;
  description: string;
  recommendedTrack: TWrappedData<ITrack> | null;
  albums: TWrappedData<IAlbum[]>;
  createdAt: string;
  updatedAt: string;
  SpotifyApi: {
    uri: string;
    images: {
      large: string;
      middle: string;
      small: string;
    };
  } | null;
  socials: ISocial[];
  avatar: IWrappedStrapiImage;
}

export type IAuthor = TStrapiResponseContainer<IAuthorInner>;
