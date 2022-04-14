/**
 * Created by westp on 11.04.2022
 */
import React from 'react';
import s from './PromoComeSection.module.scss';
import cn from 'classnames';
import SectionWrapper from 'src/layouts/DefaultLayout/components/SectionWrapper';
import Image from 'next/image';
import bg from './images/1-1.webp';

export default function PromoComeSection() {
  return (
    <SectionWrapper.Wrapper className={cn(s.PromoComeSection)}>
      <Image
        src={bg}
        className={cn(s.bg)}
        layout="fill"
        placeholder="blur"
        objectFit="cover"
        quality={75}
      />
      <SectionWrapper.Inner>
        <div className={cn(s.description)}>
          <div className={cn(s.title)}>Приходи к нам</div>
          <p>и мы украсим твои серые будни</p>
        </div>
      </SectionWrapper.Inner>
    </SectionWrapper.Wrapper>
  );
}
