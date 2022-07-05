import * as IChannel from './IChannel';
import * as IStream from './IStream';
import * as ITrack from './ITrack';
import * as IAuthor from './IAuthor';
import * as IAlbum from './IAlbum';
import * as IWrappedStrapiImage from './IWrappedStrapiImage';
import normalizeAPIEntity from './normalizeAPIEntity';

const tools = {
  IChannel,
  IStream,
  normalizeAPIEntity,
  IWrappedStrapiImage,
  ITrack,
  IAuthor,
  IAlbum,
};
export default tools;
