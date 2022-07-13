/**
 * Created by westp on 17.06.2022
 */

import React from 'react';
import s from './SupportOrderPage.module.scss';
import cn from 'classnames';
import DefaultLayout from 'layouts/DefaultLayout';

import AnyContactForm from 'components/forms/AnyContactForm';
import { useSnackbar } from 'notistack';

export default function SupportOrderPage() {
  const { enqueueSnackbar } = useSnackbar();
  const onSuccessHandler = () => {
    enqueueSnackbar(`Ваша заявка успешно отправлена! Благодарим! С Вами мы становимся лучше`, {
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
      <DefaultLayout.PageWrapper className={cn(s.wrapper)}>
        <DefaultLayout.PageTitle
          title="Заявка на исправления бага"
          breadcrumbs={[
            {
              title: 'Заявка на исправления бага',
            },
          ]}
        />
        <DefaultLayout.Section.Wrapper>
          <DefaultLayout.Section.Inner className={cn(s.main)}>
            <div className={cn(s.description)}>
              <p className={cn(s.description)}>
                Пожалуйста опишите ошибку, укажите ваши данные и отправьте форму или свяжитесь с
                нами (если вдруг форма не работает)
              </p>
            </div>
            <div className={cn(s.formContainer)}>
              <h2>Оставьте заявку</h2>
              <AnyContactForm
                className={cn(s.form)}
                type="technical error"
                onSuccess={onSuccessHandler}
              />
            </div>
            <div className={cn(s.contacts)}>
              <h2>Cвяжитесь с нами</h2>
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
