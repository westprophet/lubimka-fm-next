/**
 * Created by westp on 10.05.2022
 */

import React, { useRef } from 'react';
import s from './SearchInput.module.scss';
import cn from 'classnames';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SEARCH_INPUT_DELAY from '../../constants/SEARCH_INPUT_DELAY';

//Компонент строки поиска, передается стейт. Используется на нескольких страницах
export default function SearchInput({ className, onChange, placeholder }: ISearchInputProps) {
  const t = useRef<any>();
  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(t.current);
    t.current = setTimeout(() => {
      onChange(e);
    }, SEARCH_INPUT_DELAY);
  };
  return (
    <TextField
      placeholder={placeholder}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      fullWidth
      // value={searchValue}
      onChange={handlerOnChange}
      className={cn(s.SearchInput, className)}
    />
  );
}

SearchInput.defaultProps = {
  className: '',
  placeholder: 'Поиск',
};

interface ISearchInputProps {
  className?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): any;
  placeholder?: string;
}
