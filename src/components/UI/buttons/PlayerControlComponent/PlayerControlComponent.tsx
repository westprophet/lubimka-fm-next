/**
 * Created by westp on 22.03.2022
 */

import React from 'react';
import { TAudioManagerStatus } from '../../../../types/TAudioManagerStatus';
import PlayButton from 'components/UI/buttons/PlayButton';

export default function PlayerControlComponent({
  className,
  status,
  play,
  stop,
  type,
  disable,
  sm,
  md,
  lg,
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
      sm={sm}
      md={md}
      lg={lg}
    />
  );
}

PlayerControlComponent.defaultProps = {
  className: '',
  type: 1,
  disable: false,
  xs: true,
  sm: true,
  md: true,
  lg: true,
};

interface IPlayerControlComponentProps {
  className?: string;
  status: TAudioManagerStatus;
  disable?: boolean;
  type?: 1 | 2;
  play(): any;
  stop(): any;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
}
