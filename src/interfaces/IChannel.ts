import IStream from './others/IStream';

import {
  IStrapiDataContainer,
  TStrapiResponseContainer,
  IWrappedStrapiImage,
} from '../api/strapi/types';

import { IRadioProgram } from './IRadioProgram';

import TLanguages from 'src/types/TLanguages';

export interface IChannelInner {
  order: number;
  name: string;
  title: string;
  locale: TLanguages;
  subtitle: string | null;
  description: string;
  stream: IStream;
  online: boolean;
  programs: IStrapiDataContainer<IRadioProgram[]>;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  localizations?: {
    data: [];
  };
  cover: IWrappedStrapiImage;
}

export type IChannel = TStrapiResponseContainer<IChannelInner>;

export default IChannel;
