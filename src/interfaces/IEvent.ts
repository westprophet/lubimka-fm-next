import TStrapiResponseContainer from '../api/strapi/types/TStrapiResponseContainer';
import { IWrappedStrapiImage } from './IStrapiImage';

export default interface IEventInner {
  title: string;
  address: string;
  preview: IWrappedStrapiImage;
  endDate: string;
  startDate: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}
export type IEvent = TStrapiResponseContainer<IEventInner>;
