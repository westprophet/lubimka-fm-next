import { IAlbum } from './IAlbum';

export default interface ITrack {
  title: string;
  description: string;
  album?: IAlbum;
}
