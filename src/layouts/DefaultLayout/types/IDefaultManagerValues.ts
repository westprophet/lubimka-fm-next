import IPlayerStateContext from './IPlayerStateContext';
import IHeaderStateContext from './IHeaderStateContext';
import IRightAsideStateContext from './IRightAsideStateContext';

export default interface IDefaultManagerValues {
  header: {
    state: IHeaderStateContext | null;
    show(timeout: number): any;
    fixedShow(v: boolean): any;
    transparent(v: boolean): any;
  };
  player: {
    state: IPlayerStateContext | null;
    show(v: boolean): any;
    transparent(v: boolean): any;
    pin(v: boolean): any;
    openChannelMenu(v: boolean): any;
  };
  right: {
    state: IRightAsideStateContext | null;
    showPlayer(v: boolean): void;
  };
}
