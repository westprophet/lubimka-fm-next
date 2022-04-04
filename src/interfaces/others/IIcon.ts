import TIconType from 'src/types/TIconType';
import IStrapiImage from '../IStrapiImage';
import TStrapiResponseContainer from '../../api/strapi/types/TStrapiResponseContainer';

export default interface IIcon {
  id?: string;
  className: string;
  type: TIconType;
  svg?: TStrapiResponseContainer<IStrapiImage> | string;
}
