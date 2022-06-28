/**
 * Created by westp on 27.06.2022
 */

import React from 'react';
import s from './Post.module.scss';
import cn from 'classnames';
// import PostComponent, { IPostComponentProps } from 'components/UI/PostComponent';
import PostAltComponent, { IPostComponentProps } from 'components/UI/PostAltComponent';
import { IPost } from 'interfaces/IPost';
import { getImageUrl } from '@tools/IWrappedStrapiImage';
import useBreakpoint from 'hooks/useBreakpoint';

export default function Post({ post, className, resizable }: IPostProps) {
  const b = useBreakpoint();
  const { title, cover, timeRead, createdAt, authors } = post.attributes;
  const _cover = getImageUrl(cover, b.lg ? 'large' : 'thumbnail');
  return (
    <PostAltComponent
      className={cn(s.Post, className)}
      createdAt={createdAt}
      title={title}
      timeRead={timeRead}
      cover={_cover}
      authors={authors.data}
      resizable={resizable}
      link={`/blog/${post.attributes.url}`}
    />
  );
}

Post.defaultProps = {
  className: '',
};

interface IPostProps extends IPostComponentProps {
  className?: string;
  post: IPost;
}
