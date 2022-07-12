/**
 * Created by westp on 09.04.2022
 */

import React from 'react';
import s from './SubscribeEmailInput.module.scss';
import cn from 'classnames';
import OutlinedInput from '@mui/material/OutlinedInput';
import {
  CircularProgress,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import api from 'api/index';
import { useSnackbar } from 'notistack';

export default function SubscribeEmailInput({ className }: ISubscribeEmailInputProps) {
  const validSchema = Yup.object().shape({
    email: Yup.string().email('Вы уверены что это Email?').required('Это поле обязательно'),
  });
  const { enqueueSnackbar } = useSnackbar();
  return (
    <div className={cn(s.SubscribeEmailInput, className)}>
      <span className={cn(s.label)}>Подпишись</span>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          api.strapi.subscription
            .createSubscription({
              email: values.email,
            })
            .then((r) => {
              resetForm();
              enqueueSnackbar(`Благодарим Вас за подписку!`, {
                variant: 'success',
                autoHideDuration: 3000,
              });
            })
            .catch((r: Error) => {
              if (r.message === 'Request failed with status code 400') {
                enqueueSnackbar(`Эта почта уже используется`, {
                  variant: 'warning',
                  autoHideDuration: 5000,
                });
                resetForm();
              } else
                enqueueSnackbar(`Случилась непредвиденная ошибка, повторите позже`, {
                  variant: 'error',
                  autoHideDuration: 5000,
                });
            })
            .finally(() => setSubmitting(false));
        }}
      >
        {({ errors, touched, values, handleChange, isSubmitting }) => (
          <Form className={cn(s.form)}>
            <FormControl className={cn(s.input)} variant="outlined" fullWidth>
              <InputLabel>Email</InputLabel>
              <OutlinedInput
                label="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton className={cn(s.icon)} type="submit">
                      {!isSubmitting ? <SendIcon /> : <CircularProgress className={cn(s.loader)} />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {touched.email && Boolean(errors.email) && (
                <FormHelperText>{errors.email}</FormHelperText>
              )}
            </FormControl>
          </Form>
        )}
      </Formik>
    </div>
  );
}

SubscribeEmailInput.defaultProps = {
  className: '',
};

interface ISubscribeEmailInputProps {
  className?: string;
}
