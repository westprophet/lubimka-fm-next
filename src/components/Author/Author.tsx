/**
 * Created by westprophet on 13.05.2022
 */

import React from 'react';
import AuthorComponent, { IAuthorComponentProps } from 'components/UI/AuthorComponent';
import tools from '../../tools';
import { IAuthor } from '../../interfaces';

export default function Author({ className, author, resizable }: IAuthorProps) {
  const avatar = author.attributes.avatar; // получаем данные о картинке
  let url: string | null = tools.IWrappedStrapiImage.getImageUrl(avatar);
  if (!url) url = '/public/logo.svg'; //ставим заглушку если нет картинки
  return (
    <AuthorComponent
      cover={url}
      name={author.attributes.name}
      className={className}
      resizable={resizable}
    />
  );
}

Author.defaultProps = {
  className: '',
};

interface IAuthorProps extends IAuthorComponentProps {
  className?: string;
  author: IAuthor;
}