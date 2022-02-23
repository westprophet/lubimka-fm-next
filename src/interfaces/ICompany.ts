import TLanguages from '../types/TLanguages';
import ISocial from './ISocial';
import TStrapiResponseContainer from '../api/strapi/types/TStrapiResponseContainer';

export interface ICompanyInner {
  id?: number;
  locale: TLanguages;
  Title: string;
  Subtitle: string;
  Socials: ISocial[];
  Phones: any; //*
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export type ICompany = TStrapiResponseContainer<ICompanyInner>;

export default ICompany;
