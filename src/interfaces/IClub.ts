import ISocial from './others/ISocial';
import TStrapiResponseContainer from '../api/strapi/types/TStrapiResponseContainer';
import IEmail from './others/IEmail';
import IPhone from './others/IPhone';
import { IWrappedStrapiImage } from './IStrapiImage';

export default interface IClubInner {
  title: string;
  address: string;
  description: string;
  Socials: ISocial[];
  siteURL: string;
  Emails: IEmail[];
  PhoneNumbers: IPhone[];
  cover: IWrappedStrapiImage;
  createdAt: string;
  locale: string;
  updatedAt: string;
}

export type IClub = TStrapiResponseContainer<IClubInner>;
