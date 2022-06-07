/**
 * Created by westp on 14.05.2022
 */

// @ts-ignore
import React, { useEffect, useRef, startTransition, useState } from 'react';
import s from './FilterSection.module.scss';
import cn from 'classnames';
import DefaultLayout from '../../../../layouts/DefaultLayout';
import SearchInput from 'components/SearchInput';

import { FormControl, MenuItem, Select, TextField } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';
import { DATE_FORMAT, DATE_MASK } from '../../../../constants/DATE_INPUT';

interface IFilterSectionProps {
  className?: string;
  from: any;
  to: any;
  setSearch(v: string): any;
  setFrom(v: any): any;
  setTo(v: any): any;
}

export default function FilterSection({
  className,
  setSearch,
  from,
  to,
  setFrom,
  setTo,
}: IFilterSectionProps) {
  const [range, setRange] = useState<RangeTypes>('day');
  // const [loader, setLoader] = useState<boolean>(false);
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setSearch(e.target.value);
    });
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
    <DefaultLayout.Section.Wrapper>
      <DefaultLayout.Section.Inner
        disableHorizontalPadding
        className={cn(s.FilterSection, className)}
      >
        <div className={cn(s.searchContainer)}>
          <SearchInput
            onChange={handleChangeSearch}
            // searchValue={search}
            className={cn(s.searchInput)}
          />
        </div>
        <div className={cn(s.filterPanel)}>
          <div className={cn(s.date)}>
            <FormControl className={cn(s.selector)}>
              {/*<InputLabel>Диапазон</InputLabel>*/}
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
                // label="От"
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
                // label="До"
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
  );
}

FilterSection.defaultProps = {
  className: '',
};

type RangeTypes = 'day' | 'week' | 'tomorrow' | 'month' | 'all' | 'custom';
