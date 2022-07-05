import TStrapiResponseContainer from 'src/api/strapi/types/TStrapiResponseContainer';
import { ITrack } from 'interfaces/ITrack';
import TWrappedData from '../types/TWrappedData';
import { IAuthor } from 'interfaces/IAuthor';
import { IWrappedStrapiImage } from 'api/strapi/types';

export interface IAlbumInner {
  title: string;
  description: string;
  cover: IWrappedStrapiImage | null;
  authors?: TWrappedData<IAuthor[]>;
  creators: string;
  year: number;
  SpotifyApi: {
    uri: string;
    images: {
      large: string;
      middle: string;
      small: string;
    };
  } | null;
  tracks: TWrappedData<ITrack[]>;
}

export type IAlbum = TStrapiResponseContainer<IAlbumInner>;
