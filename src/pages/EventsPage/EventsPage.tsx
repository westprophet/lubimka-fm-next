/**
 * Created by westp on 10.05.2022
 */
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import s from './EventsPage.module.scss';
import cn from 'classnames';
import DefaultLayout from 'src/layouts/DefaultLayout';
import { IEvent } from '../../interfaces';
import ViewSection from './sections/ViewSection';
import SearchInput from 'components/SearchInput';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import { useQueryClient } from 'react-query';

import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import LoadingButton from '@mui/lab/LoadingButton';
import { DATE_FORMAT, DATE_MASK } from '../../constants/DATE_INPUT';
import api from '../../api';
import { IGetEventsReturn } from '../../api/strapi/routes/events/getEvents/getEvents';

export default function EventsPage({ events }: IEventsPageProps) {
  const [_events, setEvents] = useState<IEvent[]>(events);
  const [search, setSearch] = useState<string>('');
  const [from, setFrom] = useState<any>(null);
  const [to, setTo] = useState<any>(null);
  const [range, setRange] = useState<RangeTypes>('day');
  const [loader, setLoader] = useState<boolean>(false);
  const client = useQueryClient();

  const onSearch = (search: string, from: any, to: any) => {
    setLoader(true);
    // eslint-disable-next-line promise/catch-or-return
    client
      .fetchQuery<IGetEventsReturn>(['search-events', search], () => {
        return api.strapi.events.getEvents({
          fromDate: from ? from.utc().format() : moment().utc().format(),
          toDate: to ? to.utc().format() : undefined,
          search,
        });
      })
      .then((d: IGetEventsReturn) => {
        if (d.data) setEvents(d.data);
      })
      .catch(() => console.error('Упс... Что то не так'))
      .finally(() => setLoader(false));
  };

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleChangeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setRange(e.target.value);
  };

  useEffect(() => {
    // setFrom(moment());
    switch (range) {
      case 'day':
        setTo(moment().endOf('day'));
        break;
      case 'week':
        setTo(moment().endOf('week'));
        break;
      case 'tomorrow':
        setTo(moment().add(1, 'day').endOf('day'));
        break;
      case 'month':
        setTo(moment().endOf('month'));
        break;
      case 'all':
        setTo(null);
        setFrom(null);
        break;
    }
  }, [range]);

  return (
    <DefaultLayout.Layout className={cn(s.EventsPage)}>
      <DefaultLayout.PageWrapper>
        <DefaultLayout.PageTitle url="/club-life">Мероприятия</DefaultLayout.PageTitle>
        <DefaultLayout.Section.Wrapper>
          <DefaultLayout.Section.Inner disableHorizontalPadding className={cn(s.searchSection)}>
            <div className={cn(s.searchContainer)}>
              <SearchInput
                onChange={handleChangeSearch}
                searchValue={search}
                className={cn(s.searchInput)}
              />
              <LoadingButton
                variant="outlined"
                onClick={() => onSearch(search, from, to)}
                loading={loader}
              >
                Поиск
              </LoadingButton>
            </div>
            <div className={cn(s.filterPanel)}>
              <div className={cn(s.date)}>
                <FormControl className={cn(s.selector)}>
                  <InputLabel>Диапазон</InputLabel>
                  <Select label="Диапазон" onChange={handleChangeRange} value={range}>
                    <MenuItem value="day">Сегодня</MenuItem>
                    <MenuItem value="tomorrow">Завтра</MenuItem>
                    <MenuItem value="week">Эта неделя</MenuItem>
                    <MenuItem value="month">Этот месяц</MenuItem>
                    <MenuItem value="all">За вcе время</MenuItem>
                    <MenuItem value="custom">Выбрать в ручную</MenuItem>
                  </Select>
                </FormControl>

                <LocalizationProvider dateAdapter={AdapterMoment} locale="ru">
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="От"
                    disabled={range !== 'custom'}
                    value={from}
                    ampm={false}
                    minDateTime={moment()}
                    inputFormat={DATE_FORMAT}
                    mask={DATE_MASK}
                    onChange={(newValue) => setFrom(newValue)}
                  />
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="До"
                    disabled={range !== 'custom'}
                    value={to}
                    ampm={false}
                    mask={DATE_MASK}
                    minDateTime={moment(from)}
                    inputFormat={DATE_FORMAT}
                    onChange={(newValue) => setTo(newValue)}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </DefaultLayout.Section.Inner>
        </DefaultLayout.Section.Wrapper>

        <ViewSection events={_events} />
      </DefaultLayout.PageWrapper>
    </DefaultLayout.Layout>
  );
}
type RangeTypes = 'day' | 'week' | 'tomorrow' | 'month' | 'all' | 'custom';

EventsPage.defaultProps = {
  className: '',
};

interface IEventsPageProps {
  events: IEvent[];
}
