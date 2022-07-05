/**
 * Created by westp on 28.05.2022
 */

// @ts-ignore
import React, { startTransition, useEffect, useState } from 'react';
import s from './ListOrderPage.module.scss';
import cn from 'classnames';
import ORDER_TRACK_VIEW_MODE_KEY from './constants/ORDER_TRACK_VIEW_MODE_KEY';

import IChannel from 'interfaces/IChannel';
import { ITrackRadioheart } from 'interfaces/ITrackRadioheart';
import TOrderTrackViewMode from './types/TOrderTrackViewMode';

import DefaultLayout from 'layouts/DefaultLayout';

import SearchInput from 'components/SearchInput';
import isEmptyString from 'utils/isEmptyString';
import VirtualListTrackAlt from './sections/VirtualListTrackAlt';

import useLocalStorage from 'use-local-storage';
import { useRouter } from 'next/router';

export default function ListOrderPage({ tracks, channel }: IListOrderPageProps) {
  const r = useRouter();
  const [searchValue, setSearchValue] = useState<string>('');
  const [viewMode, setViewMode] = useLocalStorage<TOrderTrackViewMode>(
    ORDER_TRACK_VIEW_MODE_KEY,
    'full'
  );
  let _tracks = tracks;
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setSearchValue(e.target.value);
    });
  };

  if (!isEmptyString(searchValue))
    _tracks = _tracks?.filter((t: ITrackRadioheart) =>
      t.name.toLocaleLowerCase().includes(String(searchValue?.toLocaleLowerCase()))
    );

  useEffect(() => {
    r.prefetch(`/broadcast/${channel.id}/order/track`);
  }, []);
  return (
    <DefaultLayout.Layout
      className={cn(s.ListOrderPage)}
      header={{
        isFix: false,
        isFixedShow: true,
        isShow: true,
      }}
    >
      <DefaultLayout.PageWrapper>
        <DefaultLayout.PageTitle
          title={`Заказ трека на канале: ${channel.attributes.title}`}
          className={cn(s.title)}
        />

        <DefaultLayout.Section.Wrapper>
          <DefaultLayout.Section.Inner className={cn(s.searchInnerContainer)}>
            <SearchInput className={cn(s.search)} onChange={handleChangeSearch} />
            <div className={cn(s.subaction)}>
              <p>Выберите трек, который хотите заказать</p>
            </div>
          </DefaultLayout.Section.Inner>
        </DefaultLayout.Section.Wrapper>

        <DefaultLayout.Section.Wrapper>
          <DefaultLayout.Section.Inner className={cn(s.viewSection)}>
            <VirtualListTrackAlt tracks={_tracks} viewMode={viewMode} channel={channel} />
          </DefaultLayout.Section.Inner>
        </DefaultLayout.Section.Wrapper>
      </DefaultLayout.PageWrapper>
    </DefaultLayout.Layout>
  );
}

interface IListOrderPageProps {
  tracks: ITrackRadioheart[];
  channel: IChannel;
}
