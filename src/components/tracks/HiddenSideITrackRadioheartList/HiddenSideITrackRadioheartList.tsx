/**
 * Created by westp on 11.06.2022
 */

import React from 'react';
import s from './HiddenSideITrackRadioheartList.module.scss';
import cn from 'classnames';
import HiddenSideTrackList, { ITrackListProps } from 'components/tracks/HiddenSideTrackList';
import Track from 'components/tracks/RadioTrack';
import { ITrackRadioheart } from 'interfaces/ITrackRadioheart';

export default function HiddenSideITrackRadioheartList({
  className,
  tracks,
  title,
  isShow,
  onClose,
}: IProps) {
  return (
    <HiddenSideTrackList
      className={cn(s.M, className)}
      tracks={tracks}
      onClose={onClose}
      isShow={isShow}
      title={title}
      onFilter={(value: ITrackRadioheart, search: string) =>
        value.name.toLocaleLowerCase().includes(String(search?.toLocaleLowerCase()))
      }
    >
      {({ data, index, style }) => {
        return (
          <Track
            key={`radioheart-track-${data[index].name}`}
            track={data[index]}
            className={cn(s.track)}
            style={style}
          />
        );
      }}
    </HiddenSideTrackList>
  );
}

HiddenSideITrackRadioheartList.defaultProps = {
  className: '',
};

interface IProps extends ITrackListProps<ITrackRadioheart> {
  tracks: ITrackRadioheart[];
}
