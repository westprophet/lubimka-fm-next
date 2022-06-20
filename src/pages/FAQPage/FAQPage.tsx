/**
 * Created by westp on 20.06.2022
 */

import React from 'react';
import s from './FAQPage.module.scss';
import cn from 'classnames';
import DefaultLayout, { IDefaultLayoutAttributes } from '../../layouts/DefaultLayout';
import FAQItem from '@pages/FAQPage/components/FAQItem';
import { IFAQItem } from 'interfaces/IFAQItem';

export default function FAQPage({ className, faqItems }: IFAQPageProps) {
  return (
    <DefaultLayout.Layout
      className={cn(s.FAQPage, className)}
      player={{
        isTransparent: true,
        isShow: true,
      }}
    >
      <DefaultLayout.PageWrapper>
        <DefaultLayout.PageTitle placeholder="Назад">FAQ</DefaultLayout.PageTitle>
        <DefaultLayout.Section.Wrapper className={cn(s.MainSection, className)}>
          <DefaultLayout.Section.Inner disableHorizontalPadding>
            {faqItems.map((fi: IFAQItem) => {
              return (
                <FAQItem
                  key={`faq-item-${fi.id}`}
                  title={fi.attributes.title}
                  detail={fi.attributes.detail}
                  id={fi.attributes.HID}
                />
              );
            })}
          </DefaultLayout.Section.Inner>
        </DefaultLayout.Section.Wrapper>
      </DefaultLayout.PageWrapper>
    </DefaultLayout.Layout>
  );
}

FAQPage.defaultProps = {
  className: '',
};

interface IFAQPageProps extends IDefaultLayoutAttributes {
  className?: string;
  faqItems: IFAQItem[];
}
