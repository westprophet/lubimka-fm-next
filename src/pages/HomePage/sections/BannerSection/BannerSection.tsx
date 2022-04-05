import React from 'react';
import s from './BannerSection.module.scss';
import cn from 'classnames';
import FullPageSection from '../../../../layouts/DefaultLayout/components/FullPageSectionWrapper';

export default function BannerSection() {
  return (
    <FullPageSection.Wrapper className={cn(s.BannerSection)}>
      <FullPageSection.Inner className={cn(s.inner)}>
        <h1>Lubimka FM</h1>
        <h2>Мир любимой музыки в твоём кармане</h2>
        {/*<ShineBannerSpectrum />*/}
        {/*<div className={cn(s.description)}>*/}
        {/*  /!*<h2>Мир любимой музыки в твоём кармане</h2>*!/*/}
        {/*  <p></p>*/}
        {/*</div>*/}
      </FullPageSection.Inner>
    </FullPageSection.Wrapper>
  );
}
