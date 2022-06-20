/**
 * Created by westp on 17.06.2022
 */

import React from 'react';
import s from './OrderAdvertisingPage.module.scss';
import cn from 'classnames';
import DefaultLayout from 'layouts/DefaultLayout';

import AnyContactForm from 'components/forms/AnyContactForm';
import { useSnackbar } from 'notistack';

export default function OrderAdvertisingPage() {
  const { enqueueSnackbar } = useSnackbar();
  const onSuccessHandler = () => {
    enqueueSnackbar(`Ваша заявка успешно отправлена! Мы свяжемся с Вами в ближайшее время`, {
      variant: 'success',
      autoHideDuration: 5000,
    });
  };
  return (
    <DefaultLayout.Layout
      className={cn(s.OrderAdvertisingPage)}
      header={{
        isFix: false,
        isFixedShow: true,
        isShow: true,
      }}
    >
      <DefaultLayout.PageWrapper>
        <DefaultLayout.PageTitle url={`/`} placeholder={'На главную'}>
          Заявка на рекламу
        </DefaultLayout.PageTitle>
        <DefaultLayout.Section.Wrapper>
          <DefaultLayout.Section.Inner className={cn(s.inner)} disableHorizontalPadding>
            <h2>Реклама в эфире и онлайн</h2>
            <p className={cn(s.description)}>
              Аудитория Радио Lubimka – это современные молодые люди 20-35 лет, наиболее активные
              потребители товаров, услуг и технологий. Более 5 миллионов подписчиков в соцсетях, 500
              тысяч уникальных посетителей сайта, десятки тысяч слушателей подкастов и
              онлайн-радиостанций – это аудитория, которая ежедневно взаимодействует с ресурсами
              Радио Lubimka.
            </p>
          </DefaultLayout.Section.Inner>
        </DefaultLayout.Section.Wrapper>
        <DefaultLayout.Section.Wrapper>
          <DefaultLayout.Section.Inner className={cn(s.from)} disableHorizontalPadding>
            <div>
              <h2>Оставьте заявку</h2>
              <AnyContactForm
                className={cn(s.form)}
                type="order advertising"
                onSuccess={onSuccessHandler}
              />
            </div>
            <div className={cn(s.contacts)}>
              <h2>Или свяжитесь с нами</h2>
              <div className={cn(s.innerContacts)}>
                <a href="tel:08921558595">0 (89) 21 55 85 95</a>
                <div>In der Kirchtanne 27, 64297 Darmstadt</div>
                <a href="mailto:info@lubimka.fm">info@lubimka.fm</a>
              </div>
            </div>
          </DefaultLayout.Section.Inner>
        </DefaultLayout.Section.Wrapper>
      </DefaultLayout.PageWrapper>
    </DefaultLayout.Layout>
  );
}
