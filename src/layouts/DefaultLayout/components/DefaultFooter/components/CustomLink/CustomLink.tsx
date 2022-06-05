/**
 * Created by westp on 05.06.2022
 */

import React from 'react';
import s from './CustomLink.module.scss';
import cn from 'classnames';
import Link from 'next/link';

export default function CustomLink({ className, link, children }: ICustomLinkProps) {
  return (
    <li className={cn(s.CustomLink, className)}>
      <Link href={link}>
        <a>{children}</a>
      </Link>
    </li>
  );
}

CustomLink.defaultProps = {
  className: '',
};

interface ICustomLinkProps {
  className?: string;
  link: string;
  children: string;
}
