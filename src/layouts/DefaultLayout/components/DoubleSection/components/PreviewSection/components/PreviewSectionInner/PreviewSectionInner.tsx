/**
 * Created by westp on 29.04.2022
 */

import React from 'react';
import s from './PreviewSectionInner.module.scss';
import cn from 'classnames';

export default function PreviewSectionInner({ className, children }: IPreviewSectionInnerProps) {
  return <div className={cn(s.PreviewSectionInner, className)}>{children}</div>;
}

PreviewSectionInner.defaultProps = {
  className: '',
};

interface IPreviewSectionInnerProps {
  className?: string;
  children: any;
}
