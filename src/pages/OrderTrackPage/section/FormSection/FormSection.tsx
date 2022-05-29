/**
 * Created by westp on 29.05.2022
 */

import React from 'react';
import s from './FormSection.module.scss';
import cn from 'classnames';
import { Form, Formik } from 'formik';
import useValidationSchema from './hooks/useValidationSchema';
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import api from 'api/index';
import IChannel from 'interfaces/IChannel';
import { useSnackbar } from 'notistack';
import TOrderTrackStatusType from 'api/radioheathAPI/routes/tracks/orderTrack/types/TOrderTrackStatusType';
import TAudioTitle from '../../../../types/TAudioTitle';

export default function FormSection({ className, channel, id, title }: IFormSectionProps) {
  const validationSchema = useValidationSchema();
  const { enqueueSnackbar } = useSnackbar();
  const name = title ? `${title.artist}-${title.title}` : '';
  if (!id) return null;
  return (
    <Formik
      initialValues={{ message: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        // eslint-disable-next-line promise/catch-or-return
        api.radio.tracks
          .orderTrack({ c: channel, id: id, comment: values.message })
          .then((r: TOrderTrackStatusType) => {
            enqueueSnackbar(`Трек ${name} успешно заказан, пожалуйста ожидайте`, {
              variant: 'success',
              autoHideDuration: 8000,
            });
          })
          .catch((e: TOrderTrackStatusType) => {
            if (e === 'ordersDisabled')
              enqueueSnackbar(
                `В данный момент заказ песни невозможен. Возможность заказа трека была временно отключена администратором этого канала.Попробуйте позже`,
                {
                  variant: 'error',
                  autoHideDuration: 10000,
                }
              );
          })
          .finally(() => setSubmitting(false));
      }}
    >
      {({ errors, touched, values, handleChange, isSubmitting }) => (
        <Form className={cn(s.FormSection, className)}>
          <TextField
            className={cn(s.message)}
            multiline
            rows="8"
            name="message"
            fullWidth
            // label="Добавьте комментарий к заказу при желании"
            placeholder="Добавьте комментарий к заказу при желании"
            value={values.message}
            onChange={handleChange}
            error={touched.message && Boolean(errors.message)}
            helperText={touched.message ? errors.message : '  '}
          />
          <LoadingButton loading={isSubmitting} type="submit" variant="contained" color="secondary">
            Заказать
          </LoadingButton>
        </Form>
      )}
    </Formik>
  );
}

FormSection.defaultProps = {
  className: '',
};

interface IFormSectionProps {
  className?: string;
  channel: IChannel;
  title: TAudioTitle | null;
  id: string | number | undefined;
}
