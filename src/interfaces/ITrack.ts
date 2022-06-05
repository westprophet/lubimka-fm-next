import { IStrapiTrack, IWrappedStrapiImage } from 'api/strapi/types';
import TStrapiResponseContainer from '../api/strapi/types/TStrapiResponseContainer';

export interface ITrackInner {
  title: string;
  author: string;
  cover: IWrappedStrapiImage | null;
  source: IStrapiTrack | null;
}
export type ITrack = TStrapiResponseContainer<ITrackInner>;
