/**
 * Created by westp on 04.04.2022
 */

import React, { forwardRef, LegacyRef } from 'react';
import s from './SectionTitle.module.scss';
import cn from 'classnames';
// import { useRouter } from 'next/router';

const SectionTitle = forwardRef(
  (
    { className, children, link }: ISectionTitleProps,
    ref: LegacyRef<HTMLHeadingElement> | undefined
  ) => {
    // const r = useRouter();
    // const onClickHandler = useCallback(() => {
    //   if (link) r.push(link);
    // }, [link]);

    return (
      <h2 ref={ref} className={cn(s.SectionTitle, className)}>
        {children}
      </h2>
    );
  }
);

export default SectionTitle;

SectionTitle.defaultProps = {
  className: '',
};

interface ISectionTitleProps {
  className?: string;
  children: any;
  link?: string;
}
