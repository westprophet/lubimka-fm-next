/**
 * Created by westp on 29.04.2022
 */

import React, { useState } from 'react';
import s from './RadioProgrammComponent.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import DATA_FOR_BLUR from '../../../constants/DATA_FOR_BLUR';
import NoImage from 'components/UI/NoImage';
// @ts-ignore
import Marquee from 'react-double-marquee';
import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';
// import Link from 'next/link';
//Компонент отображения радиопрограммы
export default function RadioProgrammComponent({
  className,
  title,
  subtitle,
  schedule,
  cover,
  link,
  resizable,
}: IRadioProgramComponentProps) {
  const r = useRouter();
  const [loader, setLoader] = useState(false);
  const onClickHandler = () => {
    setLoader(true);
    // eslint-disable-next-line promise/catch-or-return
    r.push(link).finally(() => setLoader(false));
  };
  return (
    // <Link href={link}>
    <div className={cn(s.RP, className)} onClick={onClickHandler}>
      <div className={cn(s.coverContainer, { [s.noImg]: !cover })}>
        {loader && (
          <div className={cn(s.loader)}>
            <CircularProgress />
          </div>
        )}
        {cover ? (
          <Image
            src={cover}
            layout="fill"
            objectFit="cover"
            blurDataURL={DATA_FOR_BLUR}
            placeholder="blur"
          />
        ) : (
          <NoImage />
        )}
      </div>
      <div className={cn(s.desc)}>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        {schedule && (
          <ul>
            {schedule.map((s: string) => (
              <li key={s}>
                <Marquee direction="left" scrollWhen="overflow" speed={0.01}>
                  {s}
                </Marquee>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    // </Link>
  );
}

RadioProgrammComponent.defaultProps = {
  className: '',
  resizable: true,
};

interface IRadioProgramComponentProps {
  className?: string;
  title: string;
  cover: string | null;
  resizable?: boolean;
  link: string;
  subtitle: string;
  schedule: string[] | null;
}
