/**
 * Created by westp on 26.03.2022
 */

import React from 'react';
import s from './LanguageSelector.module.scss';
import cn from 'classnames';
import LanguageSelectorItem from './components/LanguageSelectorItem';

export default function LanguageSelector({ className }: ILanguageSelectorProps) {
  return (
    <div className={cn(s.LanguageSelector, className)}>
      <LanguageSelectorItem title="Ru" active />
      <LanguageSelectorItem title="De" />
      <LanguageSelectorItem title="En" />
    </div>
  );
}

LanguageSelector.defaultProps = {
  className: '',
};

interface ILanguageSelectorProps {
  className?: string;
}
