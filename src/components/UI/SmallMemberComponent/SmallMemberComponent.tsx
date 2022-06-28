/**
 * Created by westp on 28.06.2022
 */

import React from 'react';
import s from './SmallMemberComponent.module.scss';
import cn from 'classnames';
import { Avatar } from '@mui/material';

export default function SmallMemberComponent({
  className,
  avatar,
  name,
  surname,
}: ISmallMemberComponentProps) {
  return (
    <div className={cn(s.SmallMemberComponent, className)}>
      <Avatar alt={`${name} ${surname}`} src={avatar ?? undefined} className={cn(s.avatar)}>
        {name.slice(0, 1)}
        {surname.slice(0, 1)}
      </Avatar>
      <div className={cn(s.name)}>
        <div>{surname}</div>
        <div>{name}</div>
      </div>
    </div>
  );
}

SmallMemberComponent.defaultProps = {
  className: '',
};

interface ISmallMemberComponentProps {
  className?: string;
  avatar: string | null;
  name: string;
  surname: string;
}
