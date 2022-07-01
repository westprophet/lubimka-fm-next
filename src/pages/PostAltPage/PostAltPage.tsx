/**
 * Created by westp on 30.05.2022
 */

import React from 'react';
import s from './PostAltPage.module.scss';
import cn from 'classnames';
import ReactMarkdown from 'react-markdown';
import DefaultLayout from 'layouts/DefaultLayout';
import { IPostDetail } from 'interfaces/IPost';
import Image from 'next/image';
import DATA_FOR_BLUR from '../../constants/DATA_FOR_BLUR';
import { getImageUrl } from '@tools/IWrappedStrapiImage';

//Страница поста
export default function PostAltPage({ post }: IPostAltPageProps) {
  const content = post.attributes.content;
  const title = post.attributes.title;
  const cover = getImageUrl(post.attributes.cover, 'large');
  return (
    <DefaultLayout.Layout
      className={cn(s.PostAltPage)}
      player={{
        isShow: false,
      }}
    >
      <DefaultLayout.PageWrapper>
        <div className={cn(s.coverContainer)}>
          {cover && (
            <Image
              src={cover}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={DATA_FOR_BLUR}
            />
          )}
        </div>
        <DefaultLayout.PageTitle
          title={title}
          breadcrumbs={[
            {
              title: 'Блог',
              link: '/blog',
            },
            {
              title: title,
            },
          ]}
        />
        <DefaultLayout.Section.Wrapper>
          <DefaultLayout.Section.Inner className={cn(s.content)}>
            <ReactMarkdown>{content}</ReactMarkdown>
          </DefaultLayout.Section.Inner>
        </DefaultLayout.Section.Wrapper>
      </DefaultLayout.PageWrapper>
    </DefaultLayout.Layout>
  );
}

interface IPostAltPageProps {
  post: IPostDetail;
}
