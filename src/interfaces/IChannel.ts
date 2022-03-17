import IStream from './IStream';
import TStrapiResponseContainer from '../api/strapi/types/TStrapiResponseContainer';
import TLanguages from 'src/types/TLanguages';
import IStrapiImage from './IStrapiImage';

export interface IChannelInner {
  order: number;
  name: string;
  title: string;
  locale: TLanguages;
  subtitle: string;
  description: string;
  stream: IStream;
  cover: {
    data: TStrapiResponseContainer<IStrapiImage>;
  } | null;
}

export type IChannel = TStrapiResponseContainer<IChannelInner>;

export default IChannel;
