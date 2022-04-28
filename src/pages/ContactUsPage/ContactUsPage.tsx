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
import useValidationSchema from './hooks/useValidationSchema';
import { Formik, Form } from 'formik';
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

//Связаться с нами
export default function ContactUsPage({ className }: IContactUsPageProps) {
  const validationSchema = useValidationSchema();
  return (
    <DefaultLayout.Layout
      className={cn(s.ContactUsPage, className)}
      player={{
        transparent: false,
      }}
    >
      <DefaultLayout.PageWrapper>
        <DefaultLayout.PageTitle placeholder="Назад">Контакты</DefaultLayout.PageTitle>
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
            <Formik
              initialValues={{ email: '', name: '', phone: '', city: '', message: '' }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log('safdsdfsf');
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ errors, touched, values, handleChange, isSubmitting }) => (
                <Form className={cn(s.form)}>
                  <TextField
                    name="name"
                    label="Ваше имя *"
                    value={values.name}
                    placeholder="Укажите как Вас зовут"
                    onChange={handleChange}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name ? errors.name : '  '}
                  />
                  <TextField
                    name="phone"
                    label="Номер телефона"
                    value={values.phone}
                    placeholder="Введите ваш номер телефона"
                    onChange={handleChange}
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={touched.phone ? errors.phone : '  '}
                  />
                  <TextField
                    name="city"
                    label="Город"
                    value={values.city}
                    placeholder="Укажите ваш город"
                    onChange={handleChange}
                    error={touched.city && Boolean(errors.city)}
                    helperText={touched.city ? errors.city : '  '}
                  />
                  <TextField
                    name="email"
                    label="E-mail *"
                    value={values.email}
                    placeholder="Укажите вашу почту"
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email ? errors.email : ' '} //нужно для отступов
                  />
                  <TextField
                    className={s.message}
                    multiline
                    rows="8"
                    name="message"
                    label="Сообщение *"
                    // placeholder="Сообщение"
                    value={values.message}
                    onChange={handleChange}
                    error={touched.message && Boolean(errors.message)}
                    helperText={touched.message ? errors.message : '  '}
                  />
                  <LoadingButton
                    type="submit"
                    loading={isSubmitting}
                    variant="contained"
                    size="large"
                    loadingPosition="end"
                    endIcon={<SendIcon />}
                  >
                    Отправить
                  </LoadingButton>
                </Form>
              )}
            </Formik>
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
