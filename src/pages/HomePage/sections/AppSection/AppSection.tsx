/**
 * Created by westp on 09.04.2022
 */
import React from 'react';
import s from './AppSection.module.scss';
import cn from 'classnames';
import SectionWrapper from '../../../../layouts/DefaultLayout/components/SectionWrapper';
import AppStoreButton from 'components/buttons/AppStoreButton';
import GooglePlayButton from 'components/buttons/GooglePlayButton';

export default function AppSection() {
  return (
    <SectionWrapper.Wrapper className={cn(s.AppSection)}>
      <SectionWrapper.Inner>
        <p>Скачивай наше приложение и будь с первым молодежным онлайн-радио в Германии</p>
        <div className={cn(s.buttons)}>
          <AppStoreButton />
          <GooglePlayButton />
        </div>
      </SectionWrapper.Inner>
    </SectionWrapper.Wrapper>
  );
}
