import TStrapiResponseContainer from '../api/strapi/types/TStrapiResponseContainer';
import { ISchedule } from './others';

export default interface IRadioProgrammInner {
  title: string;
  description: string;
  order: number;
  DaySchedule: IDaySchedule[];
}
interface IDaySchedule {
  title: string;
  schedule: ISchedule;
}

export type IRadioProgramm = TStrapiResponseContainer<IRadioProgrammInner>;
