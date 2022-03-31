/**
 * Created by westp on 26.03.2022
 */

import React from 'react';
import s from './LanguageSelectorItem.module.scss';
import cn from 'classnames';

export default function LanguageSelectorItem({
  className,
  active,
  title,
}: ILanguageSelectorItemProps) {
  return (
    <div className={cn(s.LanguageSelectorItem, { [s.active]: active }, className)}>
      <div>{title}</div>
    </div>
  );
}

LanguageSelectorItem.defaultProps = {
  className: '',
  active: false,
};

interface ILanguageSelectorItemProps {
  className?: string;
  active?: boolean;
  title: string;
}
