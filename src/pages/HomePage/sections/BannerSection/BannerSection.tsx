import React, { useContext } from 'react';
import s from './BannerSection.module.scss';
import cn from 'classnames';
import FullPageSection from '../../../../layouts/DefaultLayout/components/FullPageSectionWrapper';
import BannerMiniPlayer from './sections/BannerMiniPlayer';
import { RadioPlayerContext } from '../../../../contexts/RadioPlayerManager';

export default function BannerSection() {
  const { toggle, status, channel } = useContext(RadioPlayerContext);
  return (
    <FullPageSection.Wrapper className={cn(s.BannerSection)}>
      <FullPageSection.Inner className={cn(s.inner)}>
        <div className={cn(s.titleContainer)}>
          <h1>Lubimka {channel.attributes.name}</h1>
        </div>
        <h2>Мир любимой музыки в твоём кармане</h2>
        <BannerMiniPlayer />
      </FullPageSection.Inner>
    </FullPageSection.Wrapper>
  );
}
