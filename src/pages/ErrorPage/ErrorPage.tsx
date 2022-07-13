/**
 * Created by westp on 11.06.2022
 */

import React, { useEffect, useState } from 'react';
import s from './ErrorPage.module.scss';
import cn from 'classnames';
import DefaultLayout from 'layouts/DefaultLayout';
import { useRouter } from 'next/router';
import LoadingButton from '@mui/lab/LoadingButton';
import { NextSeo } from 'next-seo';

export default function ErrorPage({ className, code, title }: IErrorPageProps) {
  const r = useRouter();
  const [load, setLoad] = useState(false);
  const toHomeHandler = () => {
    setLoad(true);
    // eslint-disable-next-line promise/catch-or-return
    r.push('/').finally(() => {
      setLoad(false);
    });
  };
  useEffect(() => {
    r.prefetch('/');
  }, []);
  return (
    <DefaultLayout.Layout className={cn(s.ErrorPage, className)}>
      <DefaultLayout.FullPageSection.Wrapper>
        <DefaultLayout.FullPageSection.Inner className={cn(s.inner)}>
          <h1 className={cn('fire-text-effect')}>{code}</h1>
          <h2>{title}</h2>
          <LoadingButton onClick={toHomeHandler} variant="text" loading={load} color="primary">
            На главную
          </LoadingButton>
        </DefaultLayout.FullPageSection.Inner>
      </DefaultLayout.FullPageSection.Wrapper>
    </DefaultLayout.Layout>
  );
}

ErrorPage.defaultProps = {
  className: '',
};

interface IErrorPageProps {
  className?: string;
  code: string | number;
  title: any;
}
