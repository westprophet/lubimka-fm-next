/**
 * Created by westp on 23.04.2022
 */

import React from 'react';
import s from './ContactUsPage.module.scss';
import cn from 'classnames';
import DefaultLayout, { IDefaultLayoutAttributes } from '../../layouts/DefaultLayout';
import Image from 'next/image';
import hearth from 'assets/images/hearth-min.webp';
import Section from '../../layouts/DefaultLayout/components/SectionWrapper';
import AnyContactForm from 'components/forms/AnyContactForm';

//Связаться с нами
export default function ContactUsPage({ className }: IContactUsPageProps) {
  return (
    <DefaultLayout.Layout
      className={cn(s.ContactUsPage, className)}
      player={{
        isTransparent: true,
        isShow: true,
      }}
    >
      <DefaultLayout.PageWrapper>
        <DefaultLayout.PageTitle
          title="Контакты"
          breadcrumbs={[
            {
              title: 'Контакты',
            },
          ]}
        />
        <Section.Wrapper className={cn(s.MainSection, className)}>
          <div className={cn(s.promo)}>
            <Image
              src={hearth}
              placeholder="blur"
              // blurDataURL={DATA_FOR_BLUR}
              objectFit="cover"
              layout="intrinsic"
              alt="hearth lubimka about us"
            />
          </div>
          <div className={cn(s.formContainer)}>
            <h2>Свяжитесь с нами</h2>
            <AnyContactForm type={'contact us'} />
          </div>
        </Section.Wrapper>
      </DefaultLayout.PageWrapper>
    </DefaultLayout.Layout>
  );
}

ContactUsPage.defaultProps = {
  className: '',
};

interface IContactUsPageProps extends IDefaultLayoutAttributes {
  className?: string;
}
