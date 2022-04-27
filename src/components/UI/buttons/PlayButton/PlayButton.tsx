/**
 * Created by westp on 04.04.2022
 */

import React from 'react';
import s from './PlayButton.module.scss';
import cn from 'classnames';
import { TAudioManagerStatus } from '../../../../types/TAudioManagerStatus';
import { CircularProgress } from '@mui/material';
import PlayIconButton from 'components/UI/buttons/PlayIconButton';
import TBreakpoints from '../../../../types/TBreakpoints';
import TPlayButtonSizes from 'components/UI/buttons/PlayButton/types/TPlayButtonSizes';
import useComponentSize from '../../../../hooks/useComponentSize';
import { TChannelComponentType } from 'components/UI/ChannelComponent';

export default function PlayButton({
  className,
  status,
  onClick,
  type,
  disable,
  sizes,
  size,
}: IPlayButtonProps) {
  const _size = useComponentSize<TChannelComponentType>(sizes);
  return (
    <div
      className={cn(
        s.PlayButton,
        {
          type2: type === 2,
        },
        size ?? _size,
        {
          disable: disable,
        },
        className
      )}
    >
      <CircularProgress
        className={cn('circular', { [s.loadingCirc]: status === 'loading' })}
        variant={status === 'loading' ? 'indeterminate' : 'determinate'}
        value={100}
      />
      <PlayIconButton status={status} onClick={onClick} disabled={disable} />
    </div>
  );
}

PlayButton.defaultProps = {
  className: '',
  type: 1,
  disable: false,
};

interface IPlayButtonProps {
  className?: string;
  status: TAudioManagerStatus;
  disable?: boolean;
  type?: 1 | 2;
  onClick(): any;
  size?: TPlayButtonSizes | null;
  sizes?: Partial<TBreakpoints<TPlayButtonSizes>>;
}
