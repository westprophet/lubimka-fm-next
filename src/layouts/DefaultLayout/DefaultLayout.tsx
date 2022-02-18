/**
 * Created by westp on 18.02.2022
 */

import React, { useEffect } from 'react';
import s from './DefaultLayout.module.scss';
import cn from 'classnames';
import api from 'src/api';
import IChannel from 'src/interfaces/IChannel';

export default function DefaultLayout({ className, children }: IDefaultLayoutProps) {
  useEffect(() => {
    api.channels
      .getChannels()
      .then((r: IChannel[]) => {
        console.log(r);
      })
      .catch((r) => {
        console.error(r);
      });
  }, []);
  return <main className={cn(s.DefaultLayout, className)}>{children}</main>;
}

DefaultLayout.defaultProps = {
  className: '',
};

interface IDefaultLayoutProps {
  className?: string;
  children: any;
}
