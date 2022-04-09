/**
 * Created by westp on 09.04.2022
 */

import React from 'react';
import s from './DefaultFooter.module.scss';
import cn from 'classnames';
import LogoComponent from '../LogoComponent';
import GooglePlayButton from 'components/buttons/GooglePlayButton';
import AppStoreButton from 'components/buttons/AppStoreButton';
import SubscribeEmailInput from 'components/SubscribeEmailInput';

export default function DefaultFooter({ className }: IDefaultFooterProps) {
  return (
    <>
      <footer className={cn(s.DefaultFooter, className)}>
        <LogoComponent className={cn(s.logo)} />
        <div className={cn(s.menu)}>
          <ul className={cn(s.column)}>
            <li>0 (00) 00 00 00 00</li>
            <li>Адрес, номер дома индекс, страна</li>
            <li>info@lubimka.fm</li>
          </ul>
          <ul className={cn(s.column)}>
            <li>Соглашение об использовании Cookies</li>
            <li>Политика конфиденциальности</li>
            <li>Как нас слушать?</li>
            <li>Реклама</li>
          </ul>
        </div>
        <div className={cn(s.contactsUs)}>
          <div className={cn(s.buttons)}>
            <AppStoreButton />
            <GooglePlayButton />
          </div>
          <SubscribeEmailInput />
        </div>
      </footer>
    </>
  );
}

DefaultFooter.defaultProps = {
  className: '',
};

interface IDefaultFooterProps {
  className?: string;
}
