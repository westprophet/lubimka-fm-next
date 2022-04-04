import ISocial from './others/ISocial';
import TStrapiResponseContainer from '../api/strapi/types/TStrapiResponseContainer';
import IEmail from './others/IEmail';
import IPhone from './others/IPhone';

export default interface IClubInner {
  title: string;
  description: string;
  Socials: ISocial[];
  siteURL: string;
  Emails: IEmail[];
  PhoneNumbers: IPhone[];
  createdAt: string;
  updatedAt: string;
}

export type IClub = TStrapiResponseContainer<IClubInner>;
