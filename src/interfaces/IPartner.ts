import TStrapiResponseContainer from '../api/strapi/types/TStrapiResponseContainer';
import ISocial from './others/ISocial';
import IPhone from './others/IPhone';
import IEmail from './others/IEmail';
import ICompany from './ICompany';
import { IWrappedStrapiImage } from './IStrapiImage';

export default interface IPartnerInner {
  title: string;
  subtitle: string;
  description: string;
  phone: string;
  order: number;
  siteURL: string;
  avatar: IWrappedStrapiImage;
  company: ICompany;
  Emails: IEmail[];
  Socials: ISocial[];
  PhoneNumbers: IPhone[];
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}
export type IPartner = TStrapiResponseContainer<IPartnerInner>;
