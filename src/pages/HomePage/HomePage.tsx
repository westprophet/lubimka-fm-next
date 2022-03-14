/**
 * Created by westp on 18.02.2022
 */

import React, { useContext } from 'react';
import s from './HomePage.module.scss';
import cn from 'classnames';
import DefaultLayout from '../../layouts/DefaultLayout';
import { useRouter } from 'next/router';
import { RadioPlayerContext } from '../../contexts/RadioPlayerManager/RadioPlayerManager';

export default function HomePage({ className }: IHomePageProps) {
  const r = useRouter();
  const { play, stop, status } = useContext(RadioPlayerContext);

  return (
    <DefaultLayout>
      <div className={cn(s.HomePage, className)}>
        <div>main</div>
        <button
          onClick={() => {
            r.push('/home');
          }}
        >
          home
        </button>
        <button
          onClick={() => {
            r.push('/');
          }}
        >
          index
        </button>
      </div>

      <div>
        <button onClick={play}>{status === 'loading' ? 'loading' : 'play'}</button>
        <button onClick={stop}>stop</button>
      </div>
    </DefaultLayout>
  );
}

HomePage.defaultProps = {
  className: '',
};

interface IHomePageProps {
  className?: string;
}
