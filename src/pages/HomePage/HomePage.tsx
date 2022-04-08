/**
 * Created by westp on 18.02.2022
 */

import React from 'react';
import s from './HomePage.module.scss';
import cn from 'classnames';

import DefaultLayout from '../../layouts/DefaultLayout';
import BannerSection from './sections/BannerSection';
import LubimkaDjsSection from './sections/LubimkaDjsSection';

export default function HomePage() {
  return (
    <DefaultLayout className={cn(s.HomePage)}>
      <BannerSection />
      <LubimkaDjsSection />
      <LubimkaDjsSection />
      <LubimkaDjsSection />
      <LubimkaDjsSection />
      <LubimkaDjsSection />
      <LubimkaDjsSection />
      <LubimkaDjsSection />
    </DefaultLayout>
  );
}
