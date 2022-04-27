import IStream from './others/IStream';
import TStrapiResponseContainer from '../api/strapi/types/TStrapiResponseContainer';
import TLanguages from 'src/types/TLanguages';
import IStrapiImage from './IStrapiImage';

export interface IChannelInner {
  order: number;
  name: string;
  title: string;
  locale: TLanguages;
  subtitle: string | null;
  description: string;
  stream: IStream;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  localizations?: {
    data: [];
  };
  cover: {
    data: TStrapiResponseContainer<IStrapiImage>;
  } | null;
}

export type IChannel = TStrapiResponseContainer<IChannelInner>;

export default IChannel;
