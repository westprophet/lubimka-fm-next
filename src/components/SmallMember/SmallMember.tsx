/**
 * Created by westp on 28.06.2022
 */

import React from 'react';
import s from './SmallMember.module.scss';
import cn from 'classnames';
import SmallMemberComponent from 'components/UI/SmallMemberComponent';
import { getImageUrl } from '@tools/IWrappedStrapiImage';
import { ITeamMember } from 'interfaces/ITeamMember';

export default function SmallMember({ className, member }: ISmallMemberProps) {
  const { name, surname, avatar } = member.attributes;
  const _cover = getImageUrl(avatar, 'thumbnail');
  return (
    <SmallMemberComponent
      avatar={_cover}
      className={cn(s.SmallMember, className)}
      name={name}
      surname={surname}
    />
  );
}

interface ISmallMemberProps {
  className?: string;
  member: ITeamMember;
}
