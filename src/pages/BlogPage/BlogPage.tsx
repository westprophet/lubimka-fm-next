/**
 * Created by westp on 27.06.2022
 */

import React from 'react';
import s from './BlogPage.module.scss';
import cn from 'classnames';
import DefaultLayout, { IDefaultLayoutAttributes } from '../../layouts/DefaultLayout';
import { IBlogCategory, IPost } from 'interfaces/index';
import { Tab, Tabs } from '@mui/material';
import useGetPosts from '@pages/BlogPage/hooks/useGetPosts';
import ViewPostsSection from '@pages/BlogPage/sections/ViewPostsSection';

export default function BlogPage({ categories }: IBlogPageProps) {
  const [category, setCategory] = React.useState(categories[0].id);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCategory(newValue);
  };
  const { data: posts, isLoading } = useGetPosts({ categoryID: category });
  const _posts = posts?.data;
  let __posts = _posts;
  if (_posts) __posts = [..._posts, ..._posts, ..._posts, ..._posts, ..._posts, ..._posts];
  return (
    <DefaultLayout.Layout
      className={cn(s.BlogPage)}
      player={{
        isTransparent: false,
      }}
    >
      <DefaultLayout.PageWrapper>
        <DefaultLayout.PageTitle url="/">Блог</DefaultLayout.PageTitle>
        <DefaultLayout.Section.Wrapper>
          <DefaultLayout.Section.Inner disableHorizontalPadding className={cn(s.tabs)}>
            <Tabs
              value={category}
              // allowScrollButtonsMobile
              onChange={handleChange}
              variant="fullWidth"
              scrollButtons="auto"
              aria-label="scrollable auto tabs"
            >
              {categories?.map((c: IBlogCategory) => (
                <Tab key={`blog-category-${c.id}`} label={c.attributes.title} value={c.id} />
              ))}
            </Tabs>
          </DefaultLayout.Section.Inner>
        </DefaultLayout.Section.Wrapper>
        {/* eslint-disable-next-line no-unsafe-optional-chaining */}
        <ViewPostsSection isLoading={isLoading} posts={__posts} />
      </DefaultLayout.PageWrapper>
    </DefaultLayout.Layout>
  );
}

interface IBlogPageProps extends IDefaultLayoutAttributes {
  categories: IBlogCategory[];
}
