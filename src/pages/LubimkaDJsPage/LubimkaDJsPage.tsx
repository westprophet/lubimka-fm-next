/**
 * Created by westprophet on 13.05.2022
 */

import React, { useState } from 'react';
import s from './LubimkaDJsPage.module.scss';
import cn from 'classnames';
import DefaultLayout from '../../layouts/DefaultLayout';
import SearchInput from 'components/SearchInput';

import { IGetAuthorsReturn } from 'api/strapi/routes/authors/getAuthors/getAuthors';
import ViewSection from './sections/ViewSection';
import { TablePagination } from '@mui/material';
import useGetAuthors from './hooks/useGetAuthors';

export default function LubimkaDJsPage({ authors }: ILubimkaDJsPageProps) {
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = React.useState(authors?.meta?.pagination.page ?? 1);
  const [rowsPerPage, setRowsPerPage] = React.useState(authors?.meta?.pagination.pageSize ?? 25);
  const { data } = useGetAuthors(search, authors, page, rowsPerPage);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const total = data?.meta?.pagination.total ?? 0;
  return (
    <DefaultLayout.Layout className={cn(s.LubimkaDJsPage)}>
      <DefaultLayout.PageWrapper>
        <DefaultLayout.PageTitle url="/">Lubimka DJs</DefaultLayout.PageTitle>
        <DefaultLayout.Section.Wrapper>
          <DefaultLayout.Section.Inner disableHorizontalPadding className={cn(s.searchSection)}>
            <div className={cn(s.searchContainer)}>
              <SearchInput onChange={handleChangeSearch} className={cn(s.searchInput)} />
            </div>
          </DefaultLayout.Section.Inner>
        </DefaultLayout.Section.Wrapper>
        <ViewSection authors={data?.data} />
        <DefaultLayout.Section.Wrapper>
          <TablePagination
            component="div"
            count={total}
            // className={cn(s.pagination)}
            labelRowsPerPage="Показать"
            rowsPerPageOptions={[25, 50, 100]}
            page={page - 1}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </DefaultLayout.Section.Wrapper>
      </DefaultLayout.PageWrapper>
    </DefaultLayout.Layout>
  );
}

interface ILubimkaDJsPageProps {
  authors: IGetAuthorsReturn;
}
