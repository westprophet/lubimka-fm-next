import TLanguages from '../types/TLanguages';
import ISocial from './others/ISocial';
import TStrapiResponseContainer from '../api/strapi/types/TStrapiResponseContainer';
import IPhone from './others/IPhone';

export interface ICompanyInner {
  id?: number;
  locale: TLanguages;
  Title: string;
  Subtitle: string;
  Socials: ISocial[];
  Phones: IPhone[];
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export type ICompany = TStrapiResponseContainer<ICompanyInner>;

export default ICompany;
