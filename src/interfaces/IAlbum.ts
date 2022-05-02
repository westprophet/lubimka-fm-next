import TStrapiResponseContainer from 'src/api/strapi/types/TStrapiResponseContainer';
import ITrackRadioheart from './ITrackRadioheart';

export interface IAlbumInner {
  title: string;
  description: string;
  tracks: ITrackRadioheart[];
}

export type IAlbum = TStrapiResponseContainer<IAlbumInner>;
