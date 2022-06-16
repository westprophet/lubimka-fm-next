/**
 * Created by westp on 10.05.2022
 */

import React, { useRef } from 'react';
import s from './SearchInput.module.scss';
import cn from 'classnames';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SEARCH_INPUT_DELAY from '../../constants/SEARCH_INPUT_DELAY';

const style = {
  white: {
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'transparent',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#99D3FB',
    },
  },
};

//Компонент строки поиска, передается стейт. Используется на нескольких страницах
export default function SearchInput({
  className,
  onChange,
  placeholder,
  white,
}: ISearchInputProps) {
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
      color={white ? 'secondary' : 'primary'}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={white ? style.white : undefined}
      fullWidth
      onChange={handlerOnChange}
      className={cn(s.SearchInput, className)}
    />
  );
}

SearchInput.defaultProps = {
  className: '',
  placeholder: 'Поиск',
  white: false,
};

interface ISearchInputProps {
  className?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): any;
  placeholder?: string;
  white?: boolean;
}
