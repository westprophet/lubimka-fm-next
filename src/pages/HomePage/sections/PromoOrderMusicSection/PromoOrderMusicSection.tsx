import React from 'react';
import s from './PromoOrderMusicSection.module.scss';
import cn from 'classnames';
import SectionWrapper from '../../../../layouts/DefaultLayout/components/SectionWrapper';
import disk from './images/disk.webp';
import Image from 'next/image';

export default function PromoOrderMusicSection() {
  return (
    <SectionWrapper.Wrapper className={cn(s.PromoOrderMusicSection)}>
      <div className={cn(s.disk)}>
        <Image src={disk} layout="fill" placeholder="blur" />
      </div>
      <SectionWrapper.Inner>
        <div className={cn(s.description)}>
          <div className={cn(s.title)}>Заказывай</div>
          <p>Любимый трек и наслаждайся звуком</p>
        </div>
      </SectionWrapper.Inner>
    </SectionWrapper.Wrapper>
  );
}
