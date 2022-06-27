/**
 * Created by westp on 27.06.2022
 */

import React from 'react';
import s from './ViewPostsSection.module.scss';
import cn from 'classnames';
import { IPost } from 'interfaces/IPost';
import { SectionWrapper } from 'layouts/DefaultLayout';
import Post from 'components/Post';

export default function ViewPostsSection({ posts, isLoading }: IViewPostsSectionProps) {
  return (
    <SectionWrapper.Wrapper className={cn(s.ViewPostsSection)}>
      {isLoading ? (
        <div></div>
      ) : (
        // <>
        //   <Skeleton variant="rectangular" width={210} height={118} />
        //   <Skeleton />
        //   <Skeleton width="60%" />
        // </>
        posts?.map((p: IPost) => {
          return <Post className={cn(s.item)} key={`post-${p.id}`} post={p} />;
        })
      )}
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
