/**
 * Created by westp on 22.03.2022
 */

import React from 'react';
import { TAudioManagerStatus } from '../../../../types/TAudioManagerStatus';
import PlayButton, { TPlayButtonSizes } from 'components/UI/buttons/PlayButton';
import TBreakpoints from '../../../../types/TBreakpoints';

export default function PlayerControlComponent({
  className,
  status,
  play,
  stop,
  type,
  disable,
  sizes,
  size,
}: IPlayerControlComponentProps) {
  const onClickHandler = () => {
    if (status === 'paused') play();
    else stop();
  };
  return (
    <PlayButton
      type={type}
      onClick={onClickHandler}
      disable={disable}
      status={status}
      className={className}
      size={size}
      sizes={sizes}
    />
  );
}

PlayerControlComponent.defaultProps = {
  className: '',
  type: 1,
  disable: false,
};

interface IPlayerControlComponentProps {
  className?: string;
  status: TAudioManagerStatus;
  disable?: boolean;
  type?: 1 | 2;
  play(): any;
  stop(): any;
  size?: TPlayButtonSizes;
  sizes?: Partial<TBreakpoints<TPlayButtonSizes>>;
}
