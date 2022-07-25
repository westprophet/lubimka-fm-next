/**
 * Created by westp on 27.06.2022
 */

import React, { useCallback, useEffect, useState } from 'react';
import s from './PostAltComponent.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import DATA_FOR_BLUR from '../../../constants/DATA_FOR_BLUR';
import NoImage from 'components/UI/NoImage';
import useBreakpoint from 'hooks/useBreakpoint';
import { ITeamMember } from 'interfaces/ITeamMember';
import { ChevronRight } from '@mui/icons-material';
import SmallMember from 'components/SmallMember';
import { useRouter } from 'next/router';
import { LoadingButton } from '@mui/lab';

export default function PostAltComponent({
  className,
  cover,
  createdAt,
  title,
  timeRead,
  resizable,
  authors,
  link,
}: IPostComponent) {
  const b = useBreakpoint();
  const _title = b.lg ? title : title.slice(0, 35);
  const r = useRouter();
  const [other, setOther] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const onClickHandler = useCallback(() => {
    setLoading(true);
    // eslint-disable-next-line promise/catch-or-return
    r?.push(link).finally(() => setLoading(false));
  }, [link, r]);

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    import('moment').then((r) => {
      const { default: moment } = r;
      let date: any = moment(createdAt).format('DD MMMM YYYY');
      const time = moment.duration(timeRead).humanize();
      if (b.lg)
        date = (
          <div>
            {date} <strong> • </strong> {time}
          </div>
        );
      setOther(date);
    });
  }, [b.lg, createdAt, timeRead]);

  return (
    <div className={cn(s.PostComponent, { [s.res]: resizable }, className)}>
      <div className={cn(s.coverContainer)}>
        {cover ? (
          <Image
            src={cover}
            className={cn(s.cover)}
            layout={'fill'}
            width="100%"
            height="100%"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={DATA_FOR_BLUR}
          />
        ) : (
          <NoImage />
        )}
      </div>
      <div className={cn(s.member)}>{authors ? <SmallMember member={authors} /> : null}</div>
      <div className={cn(s.inner)}>
        <div className={cn(s.other)}>{other}</div>
        <div className={cn(s.title)}>{_title}</div>
        <LoadingButton
          className={cn(s.readMore)}
          size="small"
          onClick={onClickHandler}
          loading={loading}
          loadingPosition="end"
          endIcon={<ChevronRight fontSize="small" />}
        >
          Подробнее
        </LoadingButton>
      </div>
    </div>
  );
}

PostAltComponent.defaultProps = {
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
  link: string;
  authors?: ITeamMember;
  title: string;
}
