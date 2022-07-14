/**
 * Created by westp on 26.03.2022
 */

import React, { useState } from 'react';
import s from './DesktopHeaderMenuItem.module.scss';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import DotsLoaderAlt from 'components/DotsLoaderAlt';

export default function DesktopHeaderMenuItem({
  className,
  title,
  link,
}: IDesktopHeaderMenuItemProps) {
  const r = useRouter();
  const [load, setLoad] = useState(false);
  const onClickHandler = () => {
    setLoad(true);
    r.push(link).finally(() => setLoad(false));
  };
  return (
    <Button
      className={cn(s.item, className)}
      // loading={load}
      onClick={onClickHandler}
      // loadingPosition="start"
    >
      {title}
      {load && <DotsLoaderAlt className={cn(s.loader)} />}
    </Button>
  );
}

DesktopHeaderMenuItem.defaultProps = {
  className: '',
};

interface IDesktopHeaderMenuItemProps {
  className?: string;
  link: string;
  title: string;
}
