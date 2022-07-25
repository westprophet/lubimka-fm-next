/**
 * Created by westp on 30.05.2022
 */

import React from 'react';
import s from './PostPage.module.scss';
import cn from 'classnames';
import ReactMarkdown from 'react-markdown';
import DefaultLayout from 'layouts/DefaultLayout';

//Страница поста
export default function PostPage({ children, title }: IPostPageProps) {
  return (
    <DefaultLayout.Layout
      className={cn(s.PostPage)}
      player={{
        isTransparent: false,
      }}
    >
      <DefaultLayout.PageWrapper>
        <DefaultLayout.PageTitle
          title={title}
          breadcrumbs={[
            {
              title: title,
            },
          ]}
        />
        <DefaultLayout.Section.Wrapper>
          <DefaultLayout.Section.Inner>
            <ReactMarkdown>{children}</ReactMarkdown>
          </DefaultLayout.Section.Inner>
        </DefaultLayout.Section.Wrapper>
      </DefaultLayout.PageWrapper>
    </DefaultLayout.Layout>
  );
}

interface IPostPageProps {
  children: any;
  title: string;
}
