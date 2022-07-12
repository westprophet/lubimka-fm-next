/**
 * Created by westprophet on 11.05.2022
 */

// @ts-ignore
import React from 'react';
import s from './EventComponent.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import DATA_FOR_BLUR from '../../../constants/DATA_FOR_BLUR';
import NoImage from 'components/UI/NoImage';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import Link from 'next/link';
import IconString from 'components/UI/others/IconString';
import useHover from 'hooks/useHover';

//Визуальный UI компонент который отображает сущность "Мероприятие" в чистом виде
export default function EventComponent({
  address,
  date,
  className,
  cover,
  title,
  link,
  resizable,
}: IEventComponent) {
  const { onMouseOverHandler, onMouseLeaveHandler, hover } = useHover();
  return (
    <div
      className={cn(s.EventComponent, { [s.resizable]: resizable }, className)}
      onMouseOver={onMouseOverHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {cover ? (
        <div className={cn(s.cover)}>
          <Image
            src={cover}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            blurDataURL={DATA_FOR_BLUR}
          />
        </div>
      ) : (
        <NoImage className={cn(s.cover, s.noIMG)} />
      )}
      <div className={cn(s.desc)}>
        <Link href={link}>
          <a className={cn(s.title)}>{title}</a>
        </Link>
        <IconString inline={hover} icon={<AccessTimeIcon fontSize="small" />} delay={500}>
          {date}
        </IconString>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${address}`}
          target="_blank"
          className={cn(s.address)}
          rel="noreferrer"
        >
          <IconString inline={hover} icon={<FmdGoodIcon fontSize="small" />} delay={500}>
            {address}
          </IconString>
        </a>
      </div>
    </div>
  );
}

EventComponent.defaultProps = {
  className: '',
  resizable: false,
};

export interface IEventComponentProps {
  resizable?: boolean;
}

interface IEventComponent extends IEventComponentProps {
  className?: string;
  cover?: string | null;
  title: string;
  date: string;
  link: string;
  address: string;
}
