/**
 * Created by westp on 31.03.2022
 */

import React from 'react';
import s from './AuthorComponent.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import NoImage from 'components/UI/NoImage';
import PlayButton from 'components/UI/buttons/PlayButton';
import { IAuthor } from 'src/interfaces';
// @ts-ignore
import Marquee from 'react-double-marquee';
import tools from '../../../tools';
import DATA_FOR_BLUR from '../../../constants/DATA_FOR_BLUR';

// import NoCover from 'assets/no-photo-heath.svg';

export default function AuthorComponent({ className, author, sm, md, lg }: IAuthorComponentProps) {
  const cover = author.attributes.avatar; // получаем данные о картинке
  let url: string | null = tools.IWrappedStrapiImage.getImageUrl(cover); //Получаем картинку
  if (!url) url = '/public/logo.svg'; //ставим заглушку если нет картинки
  return (
    <div
      className={cn(s.AuthorComponent, className, {
        sm: sm,
        md: md,
        lg: lg,
      })}
    >
      <div className={cn(s.inner)}>
        {cover ? (
          <Image
            src={url}
            className={cn(s.cover, 'zoom-effect')}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={DATA_FOR_BLUR}
          />
        ) : (
          <NoImage className={cn(s.cover, 'zoom-effect')} />
        )}
        <div className={cn(s.front)}>
          <PlayButton className={cn(s.button)} onClick={() => {}} status="paused" type={2} />
        </div>
      </div>
      <h3>
        <Marquee speed={0.02} direction="left">
          {author.attributes.name}
        </Marquee>
      </h3>
    </div>
  );
}

AuthorComponent.defaultProps = {
  className: '',
  xs: true,
  sm: true,
  md: true,
  lg: true,
};

interface IAuthorComponentProps {
  className?: string;
  author: IAuthor;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
}
