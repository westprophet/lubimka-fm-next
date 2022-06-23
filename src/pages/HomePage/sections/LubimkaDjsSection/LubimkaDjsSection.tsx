/**
 * Created by westp on 31.03.2022
 */

import React from 'react';
import s from './LubimkaDjsSection.module.scss';
import cn from 'classnames';

import SectionSlider from '../../../../layouts/DefaultLayout/components/SectionSliderWrapper';
import { IAuthor } from 'interfaces/IAuthor';
import Author from 'components/Author';

export default function LubimkaDjsSection({ authors }: ILubimkaDjsSectionProps) {
  return (
    <SectionSlider.Wrapper className={cn(s.LubimkaDjsSection)} title="Любимка DJ’s">
      {authors?.map((a: IAuthor, index: number) => {
        return (
          <SectionSlider.Slide key={`author-${a.attributes.name}`}>
            <Author author={a} />
          </SectionSlider.Slide>
        );
      })}
    </SectionSlider.Wrapper>
  );
}
interface ILubimkaDjsSectionProps {
  authors: IAuthor[];
}
