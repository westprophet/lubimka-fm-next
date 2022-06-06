import { IAlbum } from 'interfaces/IAlbum';
import { ITrack } from 'interfaces/ITrack';

//Получаем все треки из альбомов
export default function useAlbumsTracks(
  albums: IAlbum[],
  callback: (t: ITrack, i: number, a: IAlbum) => any = (t: ITrack, i: number, a: IAlbum) => t
) {
  const res = [];
  let index = 0;
  for (let i = 0; i < albums.length; i++) {
    const tracks: ITrack[] | null | undefined = albums[i].attributes.tracks.data;
    if (tracks)
      for (let t = 0; t < tracks.length; t++) {
        res.push(callback(tracks[t], index, albums[i]));
        index++;
        // res.push(tracks[t]);
      }
  }
  return res;
}
