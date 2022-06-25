/**
 * Created by westp on 31.03.2022
 */

import React, { useState } from 'react';
import s from './AuthorComponent.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import NoImage from 'components/UI/NoImage';
import PlayButton from 'components/UI/buttons/PlayButton';
// @ts-ignore
import Marquee from 'react-double-marquee';
import DATA_FOR_BLUR from '../../../constants/DATA_FOR_BLUR';
import { useRouter } from 'next/router';
import { TAudioManagerStatus } from 'types/TAudioManagerStatus';
import useHover from 'hooks/useHover';

// import NoCover from 'assets/no-photo-heath.svg';

export default function AuthorComponent({
  className,
  name,
  cover,
  resizable,
  link,
  onClick,
}: IAuthorComponent) {
  const r = useRouter();
  const [status, setStatus] = useState<TAudioManagerStatus>('paused');
  const { onMouseOverHandler, onMouseLeaveHandler, hover } = useHover();
  const onPlay = () => {
    if (link) {
      setStatus('loading');
      // eslint-disable-next-line promise/catch-or-return
      r.push(link)
        .catch(() => setStatus('error'))
        .finally(() => setStatus('paused'));
    } else if (onClick) onClick();
  };
  return (
    <div
      className={cn(s.AuthorComponent, { [s.resizable]: resizable }, className)}
      onClick={onPlay}
      onMouseOver={onMouseOverHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
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
          <PlayButton className={cn(s.button)} onClick={onPlay} status={status} type={2} />
        </div>
      </div>
      <h3>
        {hover ? (
          <Marquee speed={0.02} direction="left" scrollWhen="overflow" delay={0}>
            {name}
          </Marquee>
        ) : (
          name
        )}
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
  link: string;
  onClick?(): any;
  cover: string | null;
}
