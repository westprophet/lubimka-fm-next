import IChannel from '../../../interfaces/IChannel';

export default interface IDefaultLayoutAttributes {
  player?: {
    disable?: boolean;
    transparent?: boolean;
  };
  left?: {
    arrow?: {
      link?: string;
      show?: boolean;
      thisGoToPrevPage?: boolean;
      onClick?(): any;
    };
  };
  header?: {
    alwaysShow?: boolean;
    fixed?: boolean;
    alwaysTransparent?: boolean;
  };
  // eslint-disable-next-line react/no-unused-prop-types
  channels?: IChannel[]; //Отлавливается в _APP
}
