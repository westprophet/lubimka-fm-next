import { IAuthor } from 'interfaces/IAuthor';
import { getImageUrl } from '@tools/IWrappedStrapiImage';

export default function getCover(
  author: IAuthor,
  size: 'middle' | 'small' | 'large' = 'middle'
): string | null {
  let cover = getImageUrl(author?.attributes.avatar);
  const SpotifyApi = author.attributes.SpotifyApi;
  if (!cover && SpotifyApi && SpotifyApi.images) cover = SpotifyApi?.images[size];
  return cover;
}
