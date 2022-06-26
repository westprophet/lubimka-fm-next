/**
 * Created by westp on 29.05.2022
 */

import React, { useRef } from 'react';
import s from './FormSection.module.scss';
import cn from 'classnames';
import { Form, Formik } from 'formik';
import useValidationSchema from './hooks/useValidationSchema';
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import api from 'api/index';
import IChannel from 'interfaces/IChannel';
import { useSnackbar } from 'notistack';
import TAudioTitle from '../../../../types/TAudioTitle';
import IOrderTrackResponse from 'api/radioheathAPI/routes/tracks/orderTrack/types/IOrderTrackResponse';

export default function FormSection({ className, channel, id, title }: IFormSectionProps) {
  const validationSchema = useValidationSchema();
  const { enqueueSnackbar } = useSnackbar();
  // const name = title ? `${title.artist}-${title.title}` : '';
  const timer = useRef<NodeJS.Timeout | undefined>();
  if (!id) return null;
  return (
    <Formik
      initialValues={{ message: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        // eslint-disable-next-line promise/catch-or-return
        api.radio.tracks
          .orderTrack({ c: channel, id: id, comment: values.message })
          .then((r: IOrderTrackResponse) => {
            enqueueSnackbar(
              `Трек успешно заказан! Скоро вы услышите заказанный трек на этом канале, не переключайтесь`,
              {
                variant: 'success',
                autoHideDuration: 5000,
              }
            );
          })
          .catch((e: IOrderTrackResponse) => {
            if (timer.current) clearTimeout(timer.current);
            console.error(e);
            //если пользователь заказал свой трек уже
            if (e.user_deny_duration) {
              enqueueSnackbar(
                `Заказ можно делать не чаще чем раз в ${e.user_deny_duration} мин. для одного пользователя`,
                {
                  variant: 'warning',
                  autoHideDuration: 5000,
                }
              );
              timer.current = setTimeout(() => {
                enqueueSnackbar(
                  <div>
                    Просто зайдите с другого устройства или зайдите на другой канал. И закажите!{' '}
                    <br />
                    <br /> PS: с ув. Администратор сайта
                  </div>,
                  {
                    variant: 'info',
                    autoHideDuration: 7000,
                  }
                );
              }, 5000);
            } else if (e.status === 'ordersDisabled') {
              enqueueSnackbar(`Во время эфирных блоков заказ треков не работает`, {
                variant: 'warning',
                autoHideDuration: 5000,
              });
              timer.current = setTimeout(() => {
                enqueueSnackbar(
                  `Подождите как пройдут пару треков в эфире и закажите трек повторно`,
                  {
                    variant: 'info',
                    autoHideDuration: 7000,
                  }
                );
              }, 5500);
            }
          })
          .finally(() => {
            setSubmitting(false);
            resetForm();
          });
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
