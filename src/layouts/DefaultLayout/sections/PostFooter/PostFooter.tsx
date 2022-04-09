/**
 * Created by westp on 09.04.2022
 */

import React from 'react';
import s from './PostFooter.module.scss';
import cn from 'classnames';

export default function PostFooter({ className }: IPostFooterProps) {
  return <div className={cn(s.PostFooter, className)}>Redwest Studio 2022</div>;
}

PostFooter.defaultProps = {
  className: '',
};

interface IPostFooterProps {
  className?: string;
}
