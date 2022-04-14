/**
 * Created by westp on 31.03.2022
 */

import React from 'react';
import s from './LubimkaDjsSection.module.scss';
import cn from 'classnames';
import AuthorComponent from 'components/UI/AuthorComponent';

import SectionSlider from '../../../../layouts/DefaultLayout/components/SectionSliderWrapper';
import { IAuthor } from '../../../../interfaces';

export default function LubimkaDjsSection({ authors }: ILubimkaDjsSectionProps) {
  return (
    <SectionSlider.Wrapper className={cn(s.LubimkaDjsSection)} title="Любимка DJ’s">
      {authors?.map((a: IAuthor) => {
        return (
          <SectionSlider.Slide key={`author-${a.attributes.name}`}>
            <AuthorComponent author={a} />
          </SectionSlider.Slide>
        );
      })}
      {authors?.map((a: IAuthor) => {
        return (
          <SectionSlider.Slide key={`author-${a.attributes.name}`}>
            <AuthorComponent author={a} />
          </SectionSlider.Slide>
        );
      })}
      {authors?.map((a: IAuthor) => {
        return (
          <SectionSlider.Slide key={`author-${a.attributes.name}`}>
            <AuthorComponent author={a} />
          </SectionSlider.Slide>
        );
      })}
    </SectionSlider.Wrapper>
  );
}
interface ILubimkaDjsSectionProps {
  authors: IAuthor[];
}
