/**
 * Created by westp on 31.03.2022
 */

import React from 'react';
import s from './AuthorComponent.module.scss';
import cn from 'classnames';

export default function AuthorComponent({ className }: IAuthorComponentProps) {
  return (
    <div className={cn(s.AuthorComponent, className)}>
      <div></div>
    </div>
  );
}

AuthorComponent.defaultProps = {
  className: '',
};

interface IAuthorComponentProps {
  className?: string;
}
