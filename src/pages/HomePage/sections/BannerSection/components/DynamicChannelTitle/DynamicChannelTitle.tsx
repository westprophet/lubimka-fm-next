/**
 * Created by westp on 08.04.2022
 */

import React from 'react';
import s from './DynamicChannelTitle.module.scss';
import cn from 'classnames';
import ChannelTitleSlider from '../ChannelTitleSlider';

export default function DynamicChannelTitle({ className, title }: IDynamicChannelTitleProps) {
  return (
    <div className={cn(s.DynamicChannelTitle, className)}>
      {title && <h1>{title}</h1>}
      <ChannelTitleSlider />
    </div>
  );
}

DynamicChannelTitle.defaultProps = {
  className: '',
  title: 'Lubimka',
};

interface IDynamicChannelTitleProps {
  className?: string;
  title?: string;
}
