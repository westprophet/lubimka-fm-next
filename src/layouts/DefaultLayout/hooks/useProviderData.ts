import { useState } from 'react';

import IDefaultManagerValues from '../types/IDefaultManagerValues';
import IHeaderStateContext from '../types/IHeaderStateContext';
import IPlayerStateContext from '../types/IPlayerStateContext';

import {
  INITIAL_HEADER_DATA_STATE,
  INITIAL_PLAYER_DATA_STATE,
  INITIAL_RIGHT_ASIDE_DATA_STATE,
} from '../constants';
import useLocalStorage from 'use-local-storage';
import { IRightAsideStateContext } from '../types';
let showTimer: NodeJS.Timeout;

//Инициализация данных для провайдера шаблона
export default function useProviderData(props?: {
  player?: Partial<IPlayerStateContext>;
  header?: Partial<IHeaderStateContext>;
  right?: Partial<IRightAsideStateContext>;
}): IDefaultManagerValues {
  const [headerData, setHeaderContextData] = useState<IHeaderStateContext>({
    ...INITIAL_HEADER_DATA_STATE,
    ...props?.header,
  });

  const [rightAsideData, setRightAsideData] = useState<IRightAsideStateContext>({
    ...INITIAL_RIGHT_ASIDE_DATA_STATE,
    ...props?.right,
  });

  const [playerData, setPlayerContextData] = useState<IPlayerStateContext>({
    ...INITIAL_PLAYER_DATA_STATE,
    ...props?.player,
  });

  const [pinPlayer, setPlayerPinned] = useLocalStorage<boolean>(
    'common-player-pin',
    INITIAL_PLAYER_DATA_STATE.isPinned
  );

  return {
    header: {
      state: headerData,
      show(timeout = 1000): any {
        setHeaderContextData((p: IHeaderStateContext) => ({ ...p, isShow: true }));
        clearTimeout(showTimer);
        showTimer = setTimeout(() => {
          setHeaderContextData((p: IHeaderStateContext) => ({ ...p, isShow: false }));
        }, timeout);
      },
      fixedShow(v: boolean): any {
        setHeaderContextData((p: IHeaderStateContext) => ({ ...p, isFixShow: v }));
      },
      transparent(v: boolean): any {
        setHeaderContextData((p: IHeaderStateContext) => ({ ...p, isTransparent: v }));
      },
    },
    player: {
      state: { ...playerData, isPinned: pinPlayer },
      show(v: boolean): any {
        setPlayerContextData((p: IPlayerStateContext) => ({ ...p, isShow: v }));
      },
      transparent(v: boolean): any {
        setPlayerContextData((p: IPlayerStateContext) => ({ ...p, isTransparent: v }));
      },
      pin(v: boolean): any {
        setPlayerPinned(v);
        setRightAsideData((p: IRightAsideStateContext) => ({ ...p, isShowPlayer: !v }));
      },
      openChannelMenu(v: boolean): any {
        setPlayerContextData((p: IPlayerStateContext) => ({ ...p, isOpenChannelMenu: v }));
      },
    },
    right: {
      state: rightAsideData,
      showPlayer(v: boolean): void {
        setRightAsideData((p: IRightAsideStateContext) => ({ ...p, isShowPlayer: v }));
      },
    },
  };
}
