/**
 * Created by westp on 04.04.2022
 */

import React from 'react';
import s from './PlayButton.module.scss';
import cn from 'classnames';
import { TAudioManagerStatus } from '../../../../types/TAudioManagerStatus';
import { CircularProgress } from '@mui/material';
import PlayIconButton from 'components/UI/buttons/PlayIconButton';
import getStatusConst from '../../../../tools/TAudioManagerStatus/getStatusConst';

export default function PlayButton({
  className,
  status,
  onClick,
  isError,
  type, // Тип кнопки, белая или прозрачная
  disable, //Отключаем клацание
  active, // активный канал или нет. По умолчанию кнопка не привязана к каналу
}: IPlayButtonProps) {
  // const _size = useComponentSize<TChannelComponentType>(sizes);
  const { isError: isErrorStatus, isPlayed, isPaused, isLoading } = getStatusConst(status);
  return (
    <div
      className={cn(
        s.PlayButton,
        {
          [s.type2]: type === 2,
        },
        {
          [s.error]: (isErrorStatus && active) || isError,
        },
        {
          [s.disable]: disable,
        },
        className
      )}
    >
      <CircularProgress
        className={cn([s.circular], { [s.loadingCirc]: isLoading && Boolean(active) })}
        variant={isLoading && Boolean(active) ? 'indeterminate' : 'determinate'}
        value={100}
      />
      <PlayIconButton isPlay={isPlayed && Boolean(active)} onClick={onClick} disabled={disable} />
    </div>
  );
}

PlayButton.defaultProps = {
  className: '',
  type: 1,
  disable: false,
  active: true,
};

interface IPlayButtonProps {
  className?: string;
  status: TAudioManagerStatus;
  disable?: boolean;
  type?: 1 | 2;
  active?: boolean;
  isError?: boolean;
  onClick(): any;
  // size?: TPlayButtonSizes | null;
  // sizes?: Partial<TBreakpoints<TPlayButtonSizes>>;
}
