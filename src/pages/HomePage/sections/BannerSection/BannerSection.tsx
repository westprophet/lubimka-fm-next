import React from 'react';
import s from './BannerSection.module.scss';
import cn from 'classnames';
import FullPageSection from '../../../../layouts/DefaultLayout/components/FullPageSectionWrapper';
import BannerMiniPlayer from './sections/BannerMiniPlayer';
import DynamicChannelTitle from './components/DynamicChannelTitle';
import ShineBannerSpectrum from './components/ShineBannerSpectrum';

export default function BannerSection() {
  return (
    <FullPageSection.Wrapper className={cn(s.BannerSection)}>
      <FullPageSection.Inner className={cn(s.inner)}>
        <DynamicChannelTitle />
        <h2>Мир любимой музыки в твоём кармане</h2>
        <BannerMiniPlayer />
        {/*<ShineBannerSpectrum className={cn(s.spectrum)} />*/}
      </FullPageSection.Inner>
    </FullPageSection.Wrapper>
  );
}
