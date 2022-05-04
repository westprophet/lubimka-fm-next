/**
 * Created by westp on 31.03.2022
 */

import React from 'react';
import s from './LubimkaDjsSection.module.scss';
import cn from 'classnames';
import AuthorComponent from 'components/UI/AuthorComponent';

import SectionSlider, {
  MSlideAnimationVariants,
} from '../../../../layouts/DefaultLayout/components/SectionSliderWrapper';
import { IAuthor } from '../../../../interfaces';

export default function LubimkaDjsSection({ authors }: ILubimkaDjsSectionProps) {
  return (
    <SectionSlider.Wrapper className={cn(s.LubimkaDjsSection)} title="Любимка DJ’s">
      {authors?.map((a: IAuthor, index: number) => {
        return (
          <SectionSlider.MSlide
            variants={MSlideAnimationVariants}
            custom={index}
            whileInView="visible"
            initial="hidden"
            key={`author-${a.attributes.name}`}
          >
            <AuthorComponent author={a} />
          </SectionSlider.MSlide>
        );
      })}

      {authors?.map((a: IAuthor, index: number) => {
        return (
          <SectionSlider.MSlide
            variants={MSlideAnimationVariants}
            custom={index + 3}
            whileInView="visible"
            initial="hidden"
            key={`author-${a.attributes.name}`}
          >
            <AuthorComponent author={a} />
          </SectionSlider.MSlide>
        );
      })}
      {authors?.map((a: IAuthor, index: number) => {
        return (
          <SectionSlider.MSlide
            variants={MSlideAnimationVariants}
            custom={index + 6}
            whileInView="visible"
            initial="hidden"
            key={`author-${a.attributes.name}`}
          >
            <AuthorComponent author={a} />
          </SectionSlider.MSlide>
        );
      })}
    </SectionSlider.Wrapper>
  );
}
interface ILubimkaDjsSectionProps {
  authors: IAuthor[];
}
