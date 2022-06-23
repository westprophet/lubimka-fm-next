/**
 * Created by westp on 14.05.2022
 */

// @ts-ignore
import React, { startTransition, useState } from 'react';
import s from './FilterSection.module.scss';
import cn from 'classnames';
import DefaultLayout from '../../../../layouts/DefaultLayout';
import SearchInput from 'components/SearchInput';

import moment from 'moment';
import 'moment/locale/ru';

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';

import { FormControl, MenuItem, Select, TextField } from '@mui/material';
import { DATE_FORMAT, DATE_MASK } from '../../../../constants/DATE_INPUT';

interface IFilterSectionProps {
  className?: string;
  from: any;
  to: any;
  setSearch(v: string): any;
  setFrom(v: any): any;
  setTo(v: any): any;
}
// let moment: null | any = null;

export default function FilterSection({
  className,
  setSearch,
  from,
  to,
  setFrom,
  setTo,
}: IFilterSectionProps) {
  const [range, setRange] = useState<RangeTypes>('day');
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setSearch(e.target.value);
    });
  };

  const handleChangeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const range = e.target.value;
    let to: moment.Moment | null = null;
    let _from: string | null = null;
    switch (range) {
      case 'day':
        to = moment().endOf('day');
        break;
      case 'week':
        to = moment().endOf('week');
        break;
      case 'tomorrow':
        to = moment().add(1, 'day').endOf('day');
        break;
      case 'month':
        to = moment().endOf('month');
        break;
      case 'all':
        to = null;
        _from = null;
        break;
    }
    startTransition(() => {
      setTo(to);
      setFrom(_from);
      // @ts-ignore
      setRange(range);
    });
  };
  return (
    <DefaultLayout.Section.Wrapper>
      <DefaultLayout.Section.Inner
        disableHorizontalPadding
        className={cn(s.FilterSection, className)}
      >
        <div className={cn(s.searchContainer)}>
          <SearchInput onChange={handleChangeSearch} className={cn(s.searchInput)} />
        </div>
        <div className={cn(s.filterPanel)}>
          <div className={cn(s.date)}>
            <FormControl className={cn(s.selector)}>
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
  );
}

FilterSection.defaultProps = {
  className: '',
};

type RangeTypes = 'day' | 'week' | 'tomorrow' | 'month' | 'all' | 'custom';
