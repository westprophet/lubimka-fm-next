/**
 * Created by westp on 10.05.2022
 */
import React, { useState } from 'react';
import s from './EventsPage.module.scss';
import cn from 'classnames';
import DefaultLayout from 'src/layouts/DefaultLayout';
import ViewSection from './sections/ViewSection';

import FilterSection from './sections/FilterSection';
import useGetEvents from './hooks/useGetEvents';
import { TablePagination } from '@mui/material';
import { IGetEventsReturn } from '../../api/strapi/routes/events/getEvents/getEvents';

//Страница мероприятий
export default function EventsPage({ events }: IEventsPageProps) {
  const [search, setSearch] = useState<string>('');
  const [from, setFrom] = useState<any>(null);
  const [to, setTo] = useState<any>(null);

  const fromDate: string = from?.utc().format(),
    toDate: string = to?.utc().format();

  const [page, setPage] = React.useState(events?.meta?.pagination.page ?? 1);
  const [rowsPerPage, setRowsPerPage] = React.useState(events?.meta?.pagination.pageSize ?? 25);
  const { data } = useGetEvents(search, fromDate, toDate, events, page, rowsPerPage);

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
    <DefaultLayout.Layout className={cn(s.EventsPage)}>
      <DefaultLayout.PageWrapper>
        <DefaultLayout.PageTitle url="/club-life">Мероприятия</DefaultLayout.PageTitle>
        <FilterSection setSearch={setSearch} setFrom={setFrom} from={from} setTo={setTo} to={to} />

        <ViewSection events={data?.data} />
        <DefaultLayout.Section.Wrapper>
          <TablePagination
            component="div"
            count={total}
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

EventsPage.defaultProps = {
  className: '',
};

interface IEventsPageProps {
  events: IGetEventsReturn;
}
