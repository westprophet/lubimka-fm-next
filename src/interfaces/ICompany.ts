import TLanguages from '../types/TLanguages';
import ISocial from './ISocial';

export default interface ICompany {
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
