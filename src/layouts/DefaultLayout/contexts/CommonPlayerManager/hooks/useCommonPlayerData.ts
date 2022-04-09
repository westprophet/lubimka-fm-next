import { useContext, useState } from 'react';
import { RadioPlayerContext } from '../../../../../contexts/RadioPlayerManager';
import { ChannelManagerContext } from '../../../../../contexts/ChannelManager';
import IRadioHearthStreamDataMount from '../../../../../api/radioheathAPI/types/IRadioHearthStreamDataMount';
import rTools from '../../../../../api/radioheathAPI/tools';
import TAudioTitle from '../../../../../types/TAudioTitle';
import splitTrackName from '../../../../../tools/IRadioHearthStreamDataMount/splitTrackName';
import useImageState from '../../../components/CommonPlayer/hooks/useImageState';

//Получение данных для плеера
export default function useCommonPlayerData() {
  const { data, status, play, stop, channel } = useContext(RadioPlayerContext);
  const { channels } = useContext(ChannelManagerContext);

  const _data: IRadioHearthStreamDataMount | null = rTools.getMount(data); //Получаем более точные данные
  const title: TAudioTitle = splitTrackName(_data); //Разделяем имя и название трека
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
