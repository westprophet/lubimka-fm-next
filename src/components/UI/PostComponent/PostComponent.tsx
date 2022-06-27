/**
 * Created by westp on 27.06.2022
 */

import React, { useEffect, useState } from 'react';
import s from './PostComponent.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import DATA_FOR_BLUR from '../../../constants/DATA_FOR_BLUR';
import NoImage from 'components/UI/NoImage';
import useBreakpoint from 'hooks/useBreakpoint';

export default function PostComponent({
  className,
  cover,
  createdAt,
  title,
  timeRead,
  resizable,
}: IPostComponent) {
  const b = useBreakpoint();
  const _title = b.lg ? title : title.slice(0, 35);
  const [other, setOther] = useState<string>();

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    import('moment').then((r) => {
      const { default: moment } = r;
      let _other = moment(createdAt).format('DD MMMM YYYY');
      if (b.lg) _other = _other + ` • ${moment.duration(timeRead).humanize()}`;
      setOther(_other);
    });
  });

  return (
    <div className={cn(s.PostComponent, { [s.resizable]: resizable }, className)}>
      <div className={cn(s.coverContainer)}>
        {cover ? (
          <Image
            src={cover}
            className={cn(s.cover, 'cover', 'zoom-effect')}
            layout={'responsive'}
            width="100%"
            height="100%"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={DATA_FOR_BLUR}
          />
        ) : (
          <NoImage className={cn('zoom-effect')} />
        )}
      </div>
      <div className={cn(s.other)}>{other}</div>
      <div className={cn(s.title)}>{_title}</div>
    </div>
  );
}

PostComponent.defaultProps = {
  className: '',
  resizable: true,
};

export interface IPostComponentProps {
  resizable?: boolean;
}

interface IPostComponent extends IPostComponentProps {
  className?: string;
  cover: string | null;
  timeRead?: string | null;
  createdAt: string;
  title: string;
}
