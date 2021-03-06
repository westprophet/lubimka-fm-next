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
import CustomLink from 'layouts/DefaultLayout/components/DefaultFooter/components/CustomLink';
import Link from 'next/link';

export default function DefaultFooter({ className }: IDefaultFooterProps) {
  return (
    <>
      <footer className={cn(s.DefaultFooter, className)}>
        <LogoComponent className={cn(s.logo)} />
        <div className={cn(s.menu)}>
          <ul className={cn(s.column)}>
            <li>0 (00) 00 00 00 00</li>
            <li>Адрес, номер дома индекс, страна</li>
            <li>
              <a href="mailto:info@lubimka.fm">info@lubimka.fm</a>
            </li>
          </ul>
          <ul className={cn(s.column)}>
            <CustomLink link="/privacy-policy">Соглашение об использовании Cookies</CustomLink>
            <CustomLink link="/terms-and-conditions">Политика конфиденциальности</CustomLink>
            <CustomLink link="/how-to-listen-radio">Как нас слушать?</CustomLink>
            <CustomLink link="/advertising/order">Заказать рекламу</CustomLink>
          </ul>
        </div>
        <div className={cn(s.contactsUs)}>
          <div className={cn(s.buttons)}>
            <AppStoreButton />
            <GooglePlayButton />
          </div>
          <SubscribeEmailInput />
          <Link href="support-order">
            <a className={cn(s.sup)}>Нашли ошибку?</a>
          </Link>
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
