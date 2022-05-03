import { useContext, useState } from 'react';

import rTools from '../../../../../api/radioheathAPI/tools';
import { ChannelManagerContext } from '../../../../../contexts/ChannelManager';
import { RadioPlayerContext } from '../../../../../contexts/RadioPlayerManager';
import IRadioHearthStreamDataMount from '../../../../../api/radioheathAPI/types/IRadioHearthStreamDataMount';
import { splitTrackName } from '../../../../../tools/IRadioHearthStreamDataMount';
import TAudioTitle from '../../../../../types/TAudioTitle';
import useImageState from '../../../../../hooks/useImageState';

//Получение данных для плеера хук для упрощения
export default function useCommonPlayerData() {
  const { stream, status, play, stop } = useContext(RadioPlayerContext);
  const { channels, current: channel } = useContext(ChannelManagerContext);

  const _data: IRadioHearthStreamDataMount | null = rTools.getMount(stream.data); //Получаем более точные данные
  const title: TAudioTitle | null = splitTrackName(_data); //Разделяем имя и название трека

  const { image, isLoading } = useImageState(title); // Запрашиваем картинку для трека
  const [isOpenChannelMenu, setIsOpenChannelMenu] = useState<boolean>(false); //Стейт открытия окна каналов
  const [pinned, setPinned] = useState<boolean>(true); // Стейт для закрепления окна

  return {
    isOpenChannelMenu,
    setIsOpenChannelMenu,
    pinned,
    setPinned,
    title,
    channels,
    image,
    isLoading,
    status,
    play,
    stop,
    channel,
  };
}
