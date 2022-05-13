/**
 * Created by westp on 31.03.2022
 */

import React from 'react';
import s from './AuthorComponent.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import NoImage from 'components/UI/NoImage';
import PlayButton from 'components/UI/buttons/PlayButton';
// @ts-ignore
import Marquee from 'react-double-marquee';
import DATA_FOR_BLUR from '../../../constants/DATA_FOR_BLUR';

// import NoCover from 'assets/no-photo-heath.svg';

export default function AuthorComponent({ className, name, cover, resizable }: IAuthorComponent) {
  return (
    <div className={cn(s.AuthorComponent, { [s.resizable]: resizable }, className)}>
      <div className={cn(s.inner)}>
        {cover ? (
          <Image
            src={cover}
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
          {name}
        </Marquee>
      </h3>
    </div>
  );
}

AuthorComponent.defaultProps = {
  className: '',
};

export interface IAuthorComponentProps {
  resizable?: boolean;
}

interface IAuthorComponent extends IAuthorComponentProps {
  className?: string;
  name: string;
  cover: string | null;
}
