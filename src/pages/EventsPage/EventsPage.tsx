/**
 * Created by westp on 10.05.2022
 */

// @ts-ignore
import React, { useState, useTransition } from 'react';
import s from './EventsPage.module.scss';
import cn from 'classnames';
import DefaultLayout from 'src/layouts/DefaultLayout';
import { IEvent } from '../../interfaces';
import ViewSection from './sections/ViewSection';
import SearchInput from 'components/SearchInput';
import useGetEvents from './hooks/useGetEvents';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import { TextField } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';

export default function EventsPage({ events }: IEventsPageProps) {
  const [search, setSearch] = useState<string>();
  const [from, setFrom] = useState<any>();
  const [to, setTo] = useState<any>();

  const [inTransition, startTransition] = useTransition();

  // const __events = useGetEvents(from, to);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setSearch(e.target.value);
    });
  };
  // let _clubs = clubs;
  const _events = [...events, ...events, ...events, ...events, ...events];

  // if (!isEmptyString(search))
  //   _events = _events?.filter((c: IEvent) =>
  //     c.attributes.title.toLocaleLowerCase().includes(String(search?.toLocaleLowerCase()))
  //   );

  // const isEmpty = isEmptyArray(_events);

  return (
    <DefaultLayout.Layout className={cn(s.EventsPage)}>
      <DefaultLayout.PageWrapper>
        <DefaultLayout.PageTitle url="/club-life">Мероприятия</DefaultLayout.PageTitle>
        <DefaultLayout.Section.Wrapper>
          <DefaultLayout.Section.Inner disableHorizontalPadding>
            <SearchInput onChange={handleChange} searchValue={search} />
          </DefaultLayout.Section.Inner>
        </DefaultLayout.Section.Wrapper>
        <DefaultLayout.Section.Wrapper>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="От"
              value={from}
              onChange={(newValue) => setFrom(newValue)}
            />
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="До"
              value={to}
              onChange={(newValue) => setTo(newValue)}
            />
          </LocalizationProvider>
        </DefaultLayout.Section.Wrapper>

        <ViewSection events={_events} />
      </DefaultLayout.PageWrapper>
    </DefaultLayout.Layout>
  );
}

EventsPage.defaultProps = {
  className: '',
};

interface IEventsPageProps {
  events: IEvent[];
}
