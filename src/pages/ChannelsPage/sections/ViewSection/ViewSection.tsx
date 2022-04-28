/**
 * Created by westp on 27.04.2022
 */

import React from 'react';
import s from './ViewSection.module.scss';
import cn from 'classnames';
import GridSection from '../../../../layouts/DefaultLayout/components/GridSection';
import { IChannel } from '../../../../interfaces';
import Channel from 'components/Channel';
// import isEmptyArray from '../../../../utils/isEmptyArray';

export default function ViewSection({ className, channels }: IViewSectionProps) {
  // if (isEmptyArray(channels)) return null;
  return (
    <GridSection className={cn(s.ViewSection, className)} dense>
      {channels.map((c: IChannel) => (
        <Channel key={`channel-${c.id}`} channel={c} />
      ))}
      {channels.map((c: IChannel) => (
        <Channel key={`channel-${c.id}`} channel={c} />
      ))}
      {channels.map((c: IChannel) => (
        <Channel key={`channel-${c.id}`} channel={c} />
      ))}
    </GridSection>
  );
}

ViewSection.defaultProps = {
  className: '',
};

interface IViewSectionProps {
  className?: string;
  channels: IChannel[];
}
