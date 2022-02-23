import IStream from './IStream';
import TStrapiResponseContainer from '../api/strapi/types/TStrapiResponseContainer';

export interface IChannelInner {
  order: number;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  stream: IStream;
}

export type IChannel = TStrapiResponseContainer<IChannelInner>;

export default IChannel;
