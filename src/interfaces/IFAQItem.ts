import { TStrapiResponseContainer } from 'api/strapi/types';

export interface IFAQItemInner {
  title: string;
  detail: string;
  HID: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
export type IFAQItem = TStrapiResponseContainer<IFAQItemInner>;
