import { TStrapiResponseContainer, IWrappedStrapiImage } from '../api/strapi/types';
// import { ISchedule } from './others';

export default interface IRadioProgramInner {
  title: string;
  description: string;
  order: number;
  cover: IWrappedStrapiImage;
  subtitle: string;
  DaySchedule: IDaySchedule[];
}
export interface IDaySchedule {
  title: string;
  order: number;
  // schedule: ISchedule;
}

export type IRadioProgram = TStrapiResponseContainer<IRadioProgramInner>;
