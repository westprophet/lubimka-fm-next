import TStrapiResponseContainer from '../api/strapi/types/TStrapiResponseContainer';
import { IWrappedStrapiImage } from 'api/strapi/types';
import { IClub } from './IClub';
import TWrappedData from '../types/TWrappedData';

export default interface IEventInner {
  title: string;
  address: string;
  preview: IWrappedStrapiImage;
  endDate: string;
  description: string;
  startDate: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  club?: TWrappedData<IClub>;
}
export type IEvent = TStrapiResponseContainer<IEventInner>;
