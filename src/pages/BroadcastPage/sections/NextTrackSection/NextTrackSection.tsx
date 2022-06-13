/**
 * Created by westp on 13.06.2022
 */

import React from 'react';
import s from './NextTrackSection.module.scss';
import cn from 'classnames';
import VerticalTrackRadioheart from 'components/tracks/VerticalTrackRadioheart';
import { QuadContentSection as QS } from 'layouts/DefaultLayout/components/DoubleSection';
import { ITrackRadioheartNext } from 'interfaces/ITrackRadioheart';

//Следующий трек
export default function NextTrackSection({ className, track }: INextTrackSectionProps) {
  // if (!track) return null;
  return (
    <QS.Container title={'Следующий'} colorType={1} className={cn(s.NextTrackSection, className)}>
      <QS.Inner className={cn(s.inner)}>
        <VerticalTrackRadioheart track={track} className={cn(s.track)} />
      </QS.Inner>
    </QS.Container>
  );
}

NextTrackSection.defaultProps = {
  className: '',
};

interface INextTrackSectionProps {
  className?: string;
  track: ITrackRadioheartNext | null;
}
