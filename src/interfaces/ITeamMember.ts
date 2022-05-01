import { IWrappedStrapiImage } from '../api/strapi/types/IStrapiImage';
import TStrapiResponseContainer from '../api/strapi/types/TStrapiResponseContainer';

export default interface ITeamMemberInner {
  name: string;
  surname: string;
  post: string;
  avatar: IWrappedStrapiImage;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}
export type ITeamMember = TStrapiResponseContainer<ITeamMemberInner>;
