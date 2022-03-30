/**
 * Created by westp on 26.03.2022
 */

import React from 'react';
import s from './LanguageSelectorItem.module.scss';
import cn from 'classnames';

export default function LanguageSelectorItem({ className, active }: ILanguageSelectorItemProps) {
  return (
    <div className={cn(s.LanguageSelectorItem, { [s.active]: active }, className)}>
      <div>Ru</div>
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
}
