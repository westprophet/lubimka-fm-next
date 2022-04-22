/**
 * Created by westp on 22.04.2022
 */

import React from 'react';
import s from './Partner.module.scss';
import cn from 'classnames';
import MemberComponent from 'components/UI/MemberComponent';
import { IPartner } from '../../interfaces';
import { getImageUrl } from '../../tools/IWrappedStrapiImage';

export default function Partner({ className, p }: IPartnerProps) {
  const _cover = getImageUrl(p.attributes.avatar);
  return (
    <MemberComponent
      className={cn(s.Partner, className)}
      title={p.attributes.title}
      subtitle={p.attributes.subtitle}
      cover={_cover}
    />
  );
}

Partner.defaultProps = {
  className: '',
};

interface IPartnerProps {
  className?: string;
  p: IPartner;
}
