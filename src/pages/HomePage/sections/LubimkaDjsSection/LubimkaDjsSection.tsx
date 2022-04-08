/**
 * Created by westp on 31.03.2022
 */

import React from 'react';
import s from './LubimkaDjsSection.module.scss';
import cn from 'classnames';
import AuthorComponent from 'components/UI/AuthorComponent';
import Slider from '../../../../components/SliderWrapper';
import SectionSliderWrapper from '../../../../layouts/DefaultLayout/components/SectionSliderWrapper';
import useLastAuthors from './hooks/useLastAuthors';
import { IAuthor } from '../../../../interfaces';
import isEmptyArray from 'src/utils/isEmptyArray';

export default function LubimkaDjsSection() {
  const { authors, isLoading } = useLastAuthors(); //Получаем авторов
  if (isLoading) return <div>loading</div>;
  if (isEmptyArray(authors) && !isLoading) return null;
  return (
    <SectionSliderWrapper className={cn(s.LubimkaDjsSection)} title="Любимка DJ’s">
      {authors?.map((a: IAuthor) => {
        return (
          <Slider.Slide key={`author-${a.attributes.name}`}>
            <AuthorComponent author={a} />
          </Slider.Slide>
        );
      })}
      {authors?.map((a: IAuthor) => {
        return (
          <Slider.Slide key={`author-${a.attributes.name}`}>
            <AuthorComponent author={a} />
          </Slider.Slide>
        );
      })}
      {authors?.map((a: IAuthor) => {
        return (
          <Slider.Slide key={`author-${a.attributes.name}`}>
            <AuthorComponent author={a} />
          </Slider.Slide>
        );
      })}
    </SectionSliderWrapper>
  );
}
