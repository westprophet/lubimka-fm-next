import React from 'react';
import s from './BannerSection.module.scss';
import cn from 'classnames';
import ShineBannerSpectrum from './components/ShineBannerSpectrum';
import FullPageSectionWrapper from '../../../../layouts/DefaultLayout/components/FullPageSectionWrapper';

export default function BannerSection() {
  return (
    <FullPageSectionWrapper className={cn(s.BannerSection)}>
      <div className={cn(s.inner)}>
        <ShineBannerSpectrum />
        <div className={cn(s.description)}>
          {/*<h1>Lubimka FM</h1>*/}
          <h2>Мир любимой музыки в твоём кармане</h2>
          <p></p>
        </div>
      </div>
    </FullPageSectionWrapper>
  );
}
