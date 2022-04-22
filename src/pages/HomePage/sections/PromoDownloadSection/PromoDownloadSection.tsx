/**
 * Created by westp on 22.04.2022
 */

import React from 'react';
import s from './PromoDownloadSection.module.scss';
import cn from 'classnames';
import SectionWrapper from 'src/layouts/DefaultLayout/components/SectionWrapper';
import Image from 'next/image';
import bg from './images/background-min.webp';
import phone from './images/Phone-min.webp';
import AppStoreButton from 'components/buttons/AppStoreButton';
import GooglePlayButton from 'components/buttons/GooglePlayButton';

export default function PromoDownloadSection({ className }: IPromoDownloadSectionProps) {
  return (
    <SectionWrapper.Wrapper className={cn(s.PromoDownloadSection, className)}>
      <Image
        src={bg}
        className="bg"
        layout="fill"
        placeholder="blur"
        objectFit="cover"
        quality={50}
      />
      <div className={cn(s.phoneContainer)}>
        <Image
          src={phone}
          className="phone"
          width={615}
          height={574}
          layout="fill"
          placeholder="blur"
          objectFit="cover"
          quality={100}
        />
      </div>
      <SectionWrapper.Inner>
        <div className={cn(s.description)}>
          <h2 className="title">Между нами химия</h2>
          <p>
            Скачивай приложение, <br />
            будь с <span>Lubimka FM</span>
          </p>
          <div>
            <AppStoreButton />
            <GooglePlayButton />
          </div>
        </div>
      </SectionWrapper.Inner>
    </SectionWrapper.Wrapper>
  );
}

PromoDownloadSection.defaultProps = {
  className: '',
};

interface IPromoDownloadSectionProps {
  className?: string;
}
