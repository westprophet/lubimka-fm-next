/**
 * Created by westp on 10.05.2022
 */

// @ts-ignore
import React, { useState } from 'react';
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
import LoadingButton from '@mui/lab/LoadingButton';
// import SearchIcon from '@mui/icons-material/Search';
import moment from 'moment';
import { DATE_FORMAT, DATE_MASK } from '../../constants/DATE_INPUT';

export default function EventsPage({ events }: IEventsPageProps) {
  const [search, setSearch] = useState<string>();
  const [from, setFrom] = useState<any>(null);
  const [to, setTo] = useState<any>(null);
  const [l, setL] = useState<boolean>(false);

  // const __events = useGetEvents(from, to);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  // let _clubs = clubs;
  const _events = [...events, ...events, ...events, ...events, ...events];

  return (
    <DefaultLayout.Layout className={cn(s.EventsPage)}>
      <DefaultLayout.PageWrapper>
        <DefaultLayout.PageTitle url="/club-life">Мероприятия</DefaultLayout.PageTitle>
        <DefaultLayout.Section.Wrapper>
          <DefaultLayout.Section.Inner disableHorizontalPadding className={cn(s.searchSection)}>
            <div className={cn(s.searchContainer)}>
              <SearchInput
                onChange={handleChange}
                searchValue={search}
                className={cn(s.searchInput)}
              />
              <LoadingButton variant="outlined" onClick={() => setL(!l)} loading={l}>
                Поиск
              </LoadingButton>
            </div>
            <div className={cn(s.filterPanel)}>
              <div className={cn(s.date)}>
                <LocalizationProvider dateAdapter={AdapterMoment} locale="ru">
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="От"
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

EventsPage.defaultProps = {
  className: '',
};

interface IEventsPageProps {
  events: IEvent[];
}
