/**
 * Created by westprophet on 13.05.2022
 */

import React, { useState } from 'react';
import s from './LubimkaDJsPage.module.scss';
import cn from 'classnames';
import { IAuthor } from '../../interfaces';
import DefaultLayout from '../../layouts/DefaultLayout';
import SearchInput from 'components/SearchInput';
import LoadingButton from '@mui/lab/LoadingButton';
import api from '../../api';

import { useQueryClient } from 'react-query';
import { IGetAuthorsReturn } from '../../api/strapi/routes/authors/getAuthors/getAuthors';
import ViewSection from './sections/ViewSection';

export default function LubimkaDJsPage({ className, authors }: ILubimkaDJsPageProps) {
  const [search, setSearch] = useState<string>('');
  const [_authors, setAuthors] = useState<IAuthor[]>(authors);

  const client = useQueryClient();
  const [loader, setLoader] = useState<boolean>(false);

  const onSearch = (search: string) => {
    setLoader(true);
    // eslint-disable-next-line promise/catch-or-return
    client
      .fetchQuery<IGetAuthorsReturn>(['search-authors', search], () => {
        return api.strapi.authors.getAuthors({ search });
      })
      .then((d: IGetAuthorsReturn) => {
        if (d.data) setAuthors(d.data);
      })
      .catch(() => console.error('Упс... Что то не так'))
      .finally(() => setLoader(false));
  };

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <DefaultLayout.Layout className={cn(s.LubimkaDJsPage, className)}>
      <DefaultLayout.PageWrapper>
        <DefaultLayout.PageTitle url="/">Lubimka DJs</DefaultLayout.PageTitle>
        <DefaultLayout.Section.Wrapper>
          <DefaultLayout.Section.Inner disableHorizontalPadding className={cn(s.searchSection)}>
            <div className={cn(s.searchContainer)}>
              <SearchInput
                onChange={handleChangeSearch}
                searchValue={search}
                className={cn(s.searchInput)}
              />
              <LoadingButton variant="outlined" onClick={() => onSearch(search)} loading={loader}>
                Поиск
              </LoadingButton>
            </div>
          </DefaultLayout.Section.Inner>
        </DefaultLayout.Section.Wrapper>
        <ViewSection authors={_authors} />
      </DefaultLayout.PageWrapper>
    </DefaultLayout.Layout>
  );
}

LubimkaDJsPage.defaultProps = {
  className: '',
};

interface ILubimkaDJsPageProps {
  className?: string;
  authors: IAuthor[];
}
