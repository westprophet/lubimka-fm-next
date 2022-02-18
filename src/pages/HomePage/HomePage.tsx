/**
 * Created by westp on 18.02.2022
 */

import React from 'react';
import s from './HomePage.module.scss';
import cn from 'classnames';
import DefaultLayout from '../../layouts/DefaultLayout';

export default function HomePage({ className }: IHomePageProps) {
  return (
    <DefaultLayout>
      <div className={cn(s.HomePage, className)}>
        <div>main</div>
      </div>
    </DefaultLayout>
  );
}

HomePage.defaultProps = {
  className: '',
};

interface IHomePageProps {
  className?: string;
}
