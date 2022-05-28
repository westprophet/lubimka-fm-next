/**
 * Created by westp on 28.05.2022
 */

import React from 'react';
import s from './ListTrack.module.scss';
import cn from 'classnames';
import { ITrackRadioheart } from 'interfaces/ITrackRadioheart';
import RadioTrack from 'components/tracks/RadioTrack';

export default function ListTrack({ className, tracks }: IListTrackProps) {
  return (
    <div className={cn(s.ListTrack, className)}>
      {tracks?.map((t: ITrackRadioheart) => {
        return <RadioTrack key={'id' in t ? t.id : t.name} track={t} isCanFetchImage={false} />;
      })}
    </div>
  );
}

ListTrack.defaultProps = {
  className: '',
};

interface IListTrackProps {
  className?: string;
  tracks: ITrackRadioheart[];
}
