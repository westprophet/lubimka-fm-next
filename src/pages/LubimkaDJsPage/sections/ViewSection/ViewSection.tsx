/**
 * Created by westp on 10.05.2022
 */

import React from 'react';
import s from './ViewSection.module.scss';
import cn from 'classnames';
import { IAuthor } from '../../../../interfaces';

import { SectionWrapper as Section } from '../../../../layouts/DefaultLayout/components';
import isEmptyArray from '../../../../utils/isEmptyArray';
import DefaultLayout from '../../../../layouts/DefaultLayout';
import Author from 'components/Author';

export default function ViewSection({ className, authors }: IViewSectionProps) {
  const isEmpty = isEmptyArray(authors);
  if (isEmpty)
    return (
      <DefaultLayout.Section.Inner>
        <h2>По данному запросу ничего не найдено</h2>
      </DefaultLayout.Section.Inner>
    );
  else
    return (
      <Section.Wrapper>
        <Section.Inner className={cn(s.ViewSection, className)} disableHorizontalPadding>
          {authors.map((a: IAuthor, i: number) => (
            <Author author={a} key={`author-${a.id}-${i}`} resizable />
          ))}
        </Section.Inner>
      </Section.Wrapper>
    );
}

ViewSection.defaultProps = {
  className: '',
};

interface IViewSectionProps {
  className?: string;
  authors: IAuthor[];
}
