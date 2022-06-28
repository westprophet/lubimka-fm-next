/**
 * Created by westp on 27.06.2022
 */

import React from 'react';
import s from './ViewPostsSection.module.scss';
import cn from 'classnames';
import { IPost } from 'interfaces/IPost';
import { SectionWrapper } from 'layouts/DefaultLayout';
import Post, { PostAltSkeleton } from 'components/Post';

export default function ViewPostsSection({ posts, isLoading }: IViewPostsSectionProps) {
  let inner: any = [];
  if (isLoading)
    for (let i = 0; i <= 5; i++) {
      inner.push(<PostAltSkeleton resizable className={cn(s.item)} />);
    }
  else
    inner = posts?.map((p: IPost) => {
      return <Post className={cn(s.item)} key={`post-${p.id}`} post={p} />;
    });

  return (
    <SectionWrapper.Wrapper>
      <SectionWrapper.Inner className={cn(s.ViewPostsSection)}>{inner}</SectionWrapper.Inner>
    </SectionWrapper.Wrapper>
  );
}

ViewPostsSection.defaultProps = {
  className: '',
};

interface IViewPostsSectionProps {
  isLoading?: boolean;
  posts?: IPost[] | null;
}
