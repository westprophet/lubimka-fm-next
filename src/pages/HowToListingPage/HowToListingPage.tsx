/**
 * Created by westp on 20.06.2022
 */

import React from 'react';
import s from './HowToListingPage.module.scss';
import cn from 'classnames';

export default function HowToListingPage({ className }: IHowToListingPageProps) {
  return (
    <div className={cn(s.HowToListingPage, className)}>
      <div></div>
    </div>
  );
}

HowToListingPage.defaultProps = {
  className: '',
};

interface IHowToListingPageProps {
  className?: string;
}
