/**
 * Created by westp on 26.03.2022
 */

import React from 'react';
import s from './DesktopHeaderMenuItem.module.scss';
import cn from 'classnames';
import Link from 'next/link';

export default function DesktopHeaderMenuItem({
  className,
  title,
  link,
}: IDesktopHeaderMenuItemProps) {
  return (
    <div className={cn(s.DesktopHeaderMenuItem, className)}>
      <Link href={link}>
        <a>{title}</a>
      </Link>
    </div>
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
