import { getImageUrl } from '@tools/IWrappedStrapiImage';
import { IAlbum } from 'interfaces/IAlbum';

export default function getCover(
  album?: IAlbum | null,
  size: 'middle' | 'small' | 'large' | 'thumbnail' = 'middle'
): string | null {
  if (!album) return null;
  let cover = getImageUrl(album?.attributes.cover, size);
  const SpotifyApi = album.attributes.SpotifyApi;
  if (!cover && SpotifyApi && SpotifyApi.images)
    cover = SpotifyApi?.images[size === 'thumbnail' ? 'small' : size];
  return cover;
}
