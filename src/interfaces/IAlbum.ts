import ITrack from './ITrack';

export default interface IAlbum {
  title: string;
  description: string;
  tracks: ITrack[];
}
