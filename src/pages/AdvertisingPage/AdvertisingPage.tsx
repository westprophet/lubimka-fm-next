/**
 * Created by westp on 17.06.2022
 */

import React from 'react';
import s from './AdvertisingPage.module.scss';
import cn from 'classnames';
import IAdvertising from 'interfaces/IAdvertising';
import DefaultLayout from 'layouts/DefaultLayout';

//Страница просмотра рекламных обьявлений

export default function AdvertisingPage({ className, adv }: IAdvertisingPageProps) {
  return (
    <DefaultLayout.Layout
      className={cn(s.AdvertisingPage, className)}
      player={{
        isTransparent: false,
      }}
    >
      <DefaultLayout.PageWrapper>
        <div></div>
      </DefaultLayout.PageWrapper>
    </DefaultLayout.Layout>
  );
}

AdvertisingPage.defaultProps = {
  className: '',
};

interface IAdvertisingPageProps {
  className?: string;
  adv: IAdvertising[];
}
