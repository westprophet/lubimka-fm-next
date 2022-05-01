import IChannel from '../../../interfaces/IChannel';
import IPlayerStateContext from './IPlayerStateContext';
import IHeaderStateContext from './IHeaderStateContext';
import IRightAsideStateContext from './IRightAsideStateContext';

export default interface IDefaultLayoutAttributes {
  player?: Partial<IPlayerStateContext>;
  right?: Partial<IRightAsideStateContext>;
  left?: {
    arrow?: {
      link?: string;
      show?: boolean;
      thisGoToPrevPage?: boolean;
      onClick?(): any;
    };
  };
  header?: Partial<IHeaderStateContext>;
  // eslint-disable-next-line react/no-unused-prop-types
  channels?: IChannel[]; //Отлавливается в _APP
}
