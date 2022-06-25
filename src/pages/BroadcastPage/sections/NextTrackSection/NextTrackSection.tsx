/**
 * Created by westp on 13.06.2022
 */

import React from 'react';
import s from './NextTrackSection.module.scss';
import cn from 'classnames';
import VerticalTrackRadioheart from 'components/tracks/VerticalTrackRadioheart';
import { QuadContentSection as QS } from 'layouts/DefaultLayout/components/DoubleSection';
import useGetNextTrack from 'hooks/channel/useGetNextTrack';
import IChannel from 'interfaces/IChannel';
import TAudioTitle from 'types/TAudioTitle';

//Следующий трек
export default function NextTrackSection({ className, channel, title }: INextTrackSectionProps) {
  const { data, isLoading } = useGetNextTrack({ c: channel, title });
  return (
    <QS.Container
      index={1}
      title={'Следующий'}
      colorType={1}
      className={cn(s.NextTrackSection, className)}
      isLoading={isLoading}
    >
      <QS.Inner className={cn(s.inner)}>
        <VerticalTrackRadioheart track={data} className={cn(s.track)} />
      </QS.Inner>
    </QS.Container>
  );
}

NextTrackSection.defaultProps = {
  className: '',
};

interface INextTrackSectionProps {
  className?: string;
  channel: IChannel;
  title: TAudioTitle | null;
}
