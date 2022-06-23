/**
 * Created by westp on 30.04.2022
 */

import React, { useContext } from 'react';
import s from './ChannelPlayer.module.scss';
import cn from 'classnames';
import PlayButton from 'components/UI/buttons/PlayButton';
import { RadioPlayerContext } from '../../../../contexts/RadioPlayerManager';
import { IChannel } from 'interfaces/IChannel';
import compareIChannels from '../../../../tools/IChannel/compareIChannels';
import TAudioTitle from '../../../../types/TAudioTitle';

import ChannelTitle from './components/ChannelTitle';
import Cover from './components/Cover';

//Плеер канала
function ChannelPlayer({
  className,
  channel,
  title,
  isError,
  isCurrentChannel,
}: IChannelPlayerProps) {
  const { status, set, channel: current } = useContext(RadioPlayerContext);
  return (
    <div className={cn(s.ChannelPlayer, className)}>
      <Cover title={title} />
      {/*<CoverAlternate title={title} />*/}
      <ChannelTitle title={title} isError={isError} />
      <PlayButton
        type={2}
        active={isCurrentChannel ?? compareIChannels(channel, current)}
        onClick={() => {
          set(channel, true);
        }}
        status={status}
      />
    </div>
  );
}

ChannelPlayer.defaultProps = {
  className: '',
};

interface IChannelPlayerProps {
  className?: string;
  channel: IChannel;
  title: TAudioTitle | null;
  isError?: boolean;
  isCurrentChannel?: boolean;
}

export default React.memo<IChannelPlayerProps>(ChannelPlayer);
