import { IStrapiTrack, IWrappedStrapiImage } from 'api/strapi/types';
import ISocial from './others/ISocial';
import IPhone from './others/IPhone';
import ICompany from 'interfaces/ICompany';
import { ISite } from 'interfaces/others';
import IChannel from 'interfaces/IChannel';

export default interface IAdvertising {
  title: string;
  subtitle: string;
  preview?: IWrappedStrapiImage;
  Socials: ISocial[];
  PhoneNumbers: IPhone[];
  company: ICompany;
  Site: ISite;
  description: string;
  audio: IStrapiTrack | null;
  channels: IChannel[];
}
