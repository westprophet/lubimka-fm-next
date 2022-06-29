/**
 * Created by westp on 10.05.2022
 */

import React from 'react';
import s from './ViewSection.module.scss';
import cn from 'classnames';
import { IAuthor } from 'interfaces/IAuthor';

import { SectionWrapper as Section } from '../../../../layouts/DefaultLayout/components';
import isEmptyArray from '../../../../utils/isEmptyArray';
import Author, { AuthorSkeleton } from 'components/Author';

export default function ViewSection({ className, authors, isLoading }: IViewSectionProps) {
  const isEmpty = isEmptyArray(authors) || !authors;
  let inner: any = [];
  if (isLoading) {
    for (let i = 0; i <= 8; i++) {
      inner.push(<AuthorSkeleton resizable />);
    }
  } else if (isEmpty && !isLoading)
    return (
      <Section.Wrapper>
        <Section.Inner>
          <h2>По данному запросу ничего не найдено</h2>
        </Section.Inner>
      </Section.Wrapper>
    );
  else {
    inner = authors?.map((a: IAuthor, i: number) => (
      <Author author={a} key={`author-${a.id}-${i}`} resizable resizableHeight />
    ));
  }
  return (
    <Section.Wrapper>
      <Section.Inner className={cn(s.ViewSection, className)}>{inner}</Section.Inner>
    </Section.Wrapper>
  );
}

ViewSection.defaultProps = {
  className: '',
};

interface IViewSectionProps {
  className?: string;
  isLoading?: boolean;
  authors: IAuthor[] | null | undefined;
}
