/**
 * Created by westp on 09.04.2022
 */

import React from 'react';
import s from './SubscribeEmailInput.module.scss';
import cn from 'classnames';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Button, FormControl, IconButton, InputAdornment, InputLabel } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function SubscribeEmailInput({ className }: ISubscribeEmailInputProps) {
  return (
    <div className={cn(s.SubscribeEmailInput, className)}>
      <span className={cn(s.label)}>Подпишись</span>
      <FormControl className={cn(s.input)} variant="outlined" fullWidth>
        <InputLabel>Email</InputLabel>
        <OutlinedInput
          label="Email"
          endAdornment={
            <InputAdornment position="end">
              <IconButton className={cn(s.icon)}>
                <SendIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
}

SubscribeEmailInput.defaultProps = {
  className: '',
};

interface ISubscribeEmailInputProps {
  className?: string;
}
