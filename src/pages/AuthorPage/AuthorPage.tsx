/**
 * Created by westp on 30.05.2022
 */

import React from 'react';
import s from './AuthorPage.module.scss';
import cn from 'classnames';
import DefaultLayout from 'layouts/DefaultLayout';
import { IAuthor } from 'interfaces/IAuthor';
import DSection from 'layouts/DefaultLayout/components/DoubleSection';
import { getImageUrl } from '@tools/IWrappedStrapiImage';
import NewTrackSection from '@pages/AuthorPage/sections/NewTrackSection';

export default function AuthorPage({ author }: IAuthorPageProps) {
  if (!author) return null;
  const cover = getImageUrl(author?.attributes.avatar);
  return (
    <DefaultLayout.Layout
      className={cn(s.AuthorPage)}
      header={{ isFix: false, isFixedShow: true, isTransparent: true, isShow: true }}
      player={{ isDisable: true }}
    >
      <DSection.Wrapper>
        <DSection.Preview.Wrapper cover={cover} className={cn(s.previewContainer)}>
          <DefaultLayout.PageTitle placeholder={'На страницу Lubimka DJs'}>
            Назад
          </DefaultLayout.PageTitle>
          <DSection.Preview.Inner>
            <h1 className={cn(s.title)}>{author.attributes.name}</h1>
          </DSection.Preview.Inner>
        </DSection.Preview.Wrapper>
        <DSection.QuadContent.Wrapper className={cn(s.content)}>
          <NewTrackSection />
          <DSection.QuadContent.Container title="Треки" colorType={3}>
            <div> 2 sdfdsfdsfsdsda</div>
          </DSection.QuadContent.Container>
          <DSection.QuadContent.Container title="Альбомы" colorType={2}>
            <div>3 sdfdsfdsfsdsda</div>
          </DSection.QuadContent.Container>
          <DSection.QuadContent.Container title="Описание" colorType={3}>
            <div> 4 sdfdsfdsfsdsda</div>
          </DSection.QuadContent.Container>
        </DSection.QuadContent.Wrapper>
      </DSection.Wrapper>
    </DefaultLayout.Layout>
  );
}

interface IAuthorPageProps {
  author: IAuthor;
}
