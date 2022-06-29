/**
 * Created by westp on 18.06.2022
 */

import React from 'react';
import s from './AnyContactForm.module.scss';
import cn from 'classnames';
import { Form, Formik } from 'formik';
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import useValidationSchema from './hooks/useValidationSchema';
import IRequisition, { TRequisitionType } from 'interfaces/IRequisition';
import api from 'api/index';
import { useSnackbar } from 'notistack';
import IStrapiReturn from '../../../api/strapi/types/IStrapiReturn';

//Контактная форма для связи по нескольким типам заявки
export default function AnyContactForm({
  className,
  disablePhoneField,
  disableCityField,
  onSuccess,
  onError,
  type,
}: IAnyContactFormProps) {
  const validationSchema = useValidationSchema();
  const { enqueueSnackbar } = useSnackbar();
  return (
    <Formik
      initialValues={{ email: '', name: '', phone: '', address: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        // eslint-disable-next-line promise/catch-or-return
        api.strapi.requisitions
          .createRequisition({
            email: values.email,
            phone: values.phone,
            address: values.address,
            name: values.name,
            message: values.message,
            type: type,
          })
          .then((r) => {
            if (!r.error) {
              if (onSuccess) onSuccess(r);
              else {
                enqueueSnackbar(`Ваш запрос успешно отправлен!`, {
                  variant: 'success',
                  autoHideDuration: 5000,
                });
              }
              resetForm();
            }
          })
          .catch((r) => {
            if (onError) onError(r);
            else {
              enqueueSnackbar(`Случилась непредвиденная ошибка`, {
                variant: 'error',
                autoHideDuration: 5000,
              });
            }
          })
          .finally(() => {
            setSubmitting(false);
          });
      }}
    >
      {({ errors, touched, values, handleChange, isSubmitting }) => (
        <Form className={cn(s.AnyContactForm, className)}>
          <TextField
            name="name"
            label="Ваше имя *"
            value={values.name}
            placeholder="Укажите как Вас зовут"
            onChange={handleChange}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name ? errors.name : '  '}
          />
          {!disablePhoneField && (
            <TextField
              name="phone"
              label="Номер телефона"
              value={values.phone}
              placeholder="Введите ваш номер телефона"
              onChange={handleChange}
              error={touched.phone && Boolean(errors.phone)}
              helperText={touched.phone ? errors.phone : ' '}
            />
          )}
          {!disableCityField && (
            <TextField
              name="address"
              label="Адрес"
              value={values.address}
              placeholder="Укажите ваш адрес (город)"
              onChange={handleChange}
              error={touched.address && Boolean(errors.address)}
              helperText={touched.address ? errors.address : '  '}
            />
          )}
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
            rows="6"
            name="message"
            label="Сообщение *"
            // placeholder="Сообщение"
            value={values.message}
            onChange={handleChange}
            error={touched.message && Boolean(errors.message)}
            helperText={touched.message ? errors.message : '  '}
          />
          <LoadingButton
            className={cn(s.sendButton)}
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
  );
}

AnyContactForm.defaultProps = {
  className: '',
  disablePhoneField: false,
};

interface IAnyContactFormProps {
  className?: string;
  disablePhoneField?: boolean;
  disableCityField?: boolean;
  type: TRequisitionType;
  onSuccess?(r: IStrapiReturn<IRequisition | null>): any;
  onError?(r: IStrapiReturn<IRequisition | null>): any;
}
