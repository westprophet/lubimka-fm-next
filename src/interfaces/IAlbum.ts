import TStrapiResponseContainer from 'src/api/strapi/types/TStrapiResponseContainer';
import ITrack from './ITrack';

export interface IAlbumInner {
  title: string;
  description: string;
  tracks: ITrack[];
}

export type IAlbum = TStrapiResponseContainer<IAlbumInner>;
