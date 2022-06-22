/**
 * Created by westp on 22.03.2022
 */

import React from 'react';
import { TAudioManagerStatus } from 'types/TAudioManagerStatus';
import PlayButton from 'components/UI/buttons/PlayButton';

export default function PlayerControlComponent({
  className,
  status,
  onClick,
  type,
  disable,
  isError,
}: IPlayerControlComponentProps) {
  return (
    <PlayButton
      type={type}
      onClick={onClick}
      disable={disable}
      status={status}
      className={className}
      isError={isError}
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
  isError?: boolean;
  type?: 1 | 2;
  onClick(): any;
}
