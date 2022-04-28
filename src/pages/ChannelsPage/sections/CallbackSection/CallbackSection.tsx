/**
 * Created by westp on 27.04.2022
 */

import React from 'react';
import s from './CallbackSection.module.scss';
import cn from 'classnames';
import Section from 'src/layouts/DefaultLayout/components/SectionWrapper';
import { Form, Formik } from 'formik';
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import useValidationSchema from './hooks/useValidationSchema';

export default function CallbackSection({ className }: ICallbackSectionProps) {
  const validationSchema = useValidationSchema();
  return (
    <Section.Wrapper className={cn(s.CallbackSection, className)}>
      <Section.Title>Есть идея для канала? Поделитесь с нами</Section.Title>
      <Formik
        initialValues={{ email: '', name: '', phone: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
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
    </Section.Wrapper>
  );
}

CallbackSection.defaultProps = {
  className: '',
};

interface ICallbackSectionProps {
  className?: string;
}
