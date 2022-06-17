/**
 * Created by westp on 17.06.2022
 */

import React from 'react';
import s from './OrderAdvertisingPage.module.scss';
import cn from 'classnames';

export default function OrderAdvertisingPage({ className }: IOrderAdvertisingPageProps) {
  return (
    <div className={cn(s.OrderAdvertisingPage, className)}>
      <h2>Реклама в эфире и онлайн</h2>
      <p>
        Аудитория Радио Lubimka – это современные молодые люди 20-35 лет, наиболее активные
        потребители товаров, услуг и технологий. Более 5 миллионов подписчиков в соцсетях, 500 тысяч
        уникальных посетителей сайта, десятки тысяч слушателей подкастов и онлайн-радиостанций – это
        аудитория, которая ежедневно взаимодействует с ресурсами Радио Lubimka.
      </p>
      <div className={cn(s.body)}>
        <form></form>
        <div className={cn(s.contacts)}></div>
      </div>
    </div>
  );
}

OrderAdvertisingPage.defaultProps = {
  className: '',
};

interface IOrderAdvertisingPageProps {
  className?: string;
}
