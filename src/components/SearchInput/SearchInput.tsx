/**
 * Created by westp on 10.05.2022
 */

import React from 'react';
import s from './SearchInput.module.scss';
import cn from 'classnames';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

//Компонент строки поиска, передается стейт. Используется на нескольких страницах
export default function SearchInput({ className, onChange, searchValue }: ISearchInputProps) {
  return (
    <TextField
      placeholder="Поиск"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      fullWidth
      value={searchValue}
      onChange={onChange}
      className={cn(s.SearchInput, className)}
    />
  );
}

SearchInput.defaultProps = {
  className: '',
};

interface ISearchInputProps {
  className?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): any;
  searchValue: string | undefined;
}
