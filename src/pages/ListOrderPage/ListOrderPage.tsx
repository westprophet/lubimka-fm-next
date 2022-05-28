/**
 * Created by westp on 28.05.2022
 */

// @ts-ignore
import React, { startTransition, useState } from 'react';
import s from './ListOrderPage.module.scss';
import cn from 'classnames';
import { ITrackRadioheart } from 'interfaces/ITrackRadioheart';
import DefaultLayout from 'layouts/DefaultLayout';
import VirtualListTrack from './sections/VirtualListTrack';
import SearchInput from 'components/SearchInput';
import isEmptyString from '../../utils/isEmptyString';

export default function ListOrderPage({ tracks }: IListOrderPageProps) {
  const [searchValue, setSearchValue] = useState<string>('');
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
  return (
    <DefaultLayout.Layout
      className={cn(s.ListOrderPage)}
      header={{
        isFixedShow: true,
        isShow: true,
      }}
    >
      <DefaultLayout.PageWrapper>
        <DefaultLayout.PageTitle url="/" className={cn(s.title)}>
          Заказ трека
        </DefaultLayout.PageTitle>

        <DefaultLayout.Section.Wrapper className={cn(s.searchContainer)}>
          <DefaultLayout.Section.Inner className={cn(s.searchInnerContainer)}>
            <SearchInput onChange={handleChangeSearch} />
          </DefaultLayout.Section.Inner>
        </DefaultLayout.Section.Wrapper>

        <DefaultLayout.Section.Wrapper>
          <DefaultLayout.Section.Inner className={cn(s.viewSection)}>
            <VirtualListTrack tracks={_tracks} />
            {/*<ListTrack tracks={tracks} />*/}
          </DefaultLayout.Section.Inner>
        </DefaultLayout.Section.Wrapper>
      </DefaultLayout.PageWrapper>
    </DefaultLayout.Layout>
  );
}

interface IListOrderPageProps {
  tracks: ITrackRadioheart[];
}
