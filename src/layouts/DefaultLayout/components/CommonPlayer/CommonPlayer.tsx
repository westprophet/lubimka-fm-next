/**
 * Created by westprophet on 13.02.2022
 */

import React, { useContext, useState } from 'react';
import { RadioPlayerContext } from '../../../../contexts/RadioPlayerManager';
import s from './CommonPlayer.module.scss';
import cn from 'classnames';

import IRadioHearthStreamDataMount from '../../../../api/radioheathAPI/types/IRadioHearthStreamDataMount';
import splitTrackName from '../../../../tools/IRadioHearthStreamDataMount/splitTrackName';
import CommonPlayerTitle from './components/CommonPlayerTitle';
import TAudioTitle from '../../../../types/TAudioTitle';
import useImageState from './hooks/useImageState';
import rTools from '../../../../api/radioheathAPI/tools';
import CommonPlayerCover from './components/CommonPlayerCover';
import CommonPlayerAction from './components/CommonPlayerAction';
import ChannelMenuSelector from './sections/ChannelMenuSelector';
import PlayerControlComponent from 'components/UI/PlayerControlComponent';

//плеер
export default function CommonPlayer({ className }: ICommonPlayerProps) {
  const { data, status, play, stop, channel } = useContext(RadioPlayerContext);
  const _data: IRadioHearthStreamDataMount | null = rTools.getMount(data); //Получаем более точные данные
  const title: TAudioTitle = splitTrackName(_data); //Разделяем имя и название трека
  const { image, isLoading } = useImageState(title); // Запрашиваем картинку для трека

  const [openChannelMenu, setOpenChannelMenu] = useState<boolean>(false);

  return (
    <div
      className={cn(
        s.CommonPlayer,
        'with-screen-padding',
        { [s.openChannelMenu]: openChannelMenu },
        s.fixed,
        className
      )}
    >
      <CommonPlayerCover className={cn(s.cover)} image={image} isLoading={isLoading} />
      <PlayerControlComponent className={cn(s.controls)} status={status} play={play} stop={stop} />
      <CommonPlayerTitle className={cn(s.title)} ft={title} />
      <CommonPlayerAction
        channel={channel}
        className={cn(s.actions)}
        isOpenChannelMenu={openChannelMenu}
        setOpenChannelMenu={setOpenChannelMenu}
      />
      <ChannelMenuSelector isOpen={openChannelMenu} className={cn(s.channelMenuSelector)} />
    </div>
  );
}

CommonPlayer.defaultProps = {
  className: '',
};

interface ICommonPlayerProps {
  className?: string;
}
