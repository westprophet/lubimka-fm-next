/**
 * Created by westp on 31.03.2022
 */

import React from 'react';
import s from './FullPageSectionWrapper.module.scss';
import cn from 'classnames';

export default function FullPageSectionWrapper({ className, children }: IFullPageWrapperProps) {
  return <section className={cn(s.FullPageSectionWrapper, className)}>{children}</section>;
}

FullPageSectionWrapper.defaultProps = {
  className: '',
};

interface IFullPageWrapperProps {
  className?: string;
  children: any;
}
