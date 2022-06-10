import { IStrapiTrack, IWrappedStrapiImage } from 'api/strapi/types';
import TStrapiResponseContainer from '../api/strapi/types/TStrapiResponseContainer';
import { IAlbum } from 'interfaces/IAlbum';

export interface ITrackInner {
  title: string;
  author: string;
  album?: IAlbum;
  cover: IWrappedStrapiImage | null;
  source: IStrapiTrack | null;
}
export type ITrack = TStrapiResponseContainer<ITrackInner>;
