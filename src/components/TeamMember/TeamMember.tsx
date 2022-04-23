/**
 * Created by westp on 23.04.2022
 */

import React from 'react';
import s from './TeamMember.module.scss';
import cn from 'classnames';
import { ITeamMember } from '../../interfaces';
import { getImageUrl } from '../../tools/IWrappedStrapiImage';
import MemberComponent from 'components/UI/MemberComponent';

export default function TeamMember({ className, member }: ITeamMemberProps) {
  const _cover = getImageUrl(member.attributes.avatar);
  return (
    <MemberComponent
      className={cn(s.TeamMember, className)}
      title={`${member.attributes.name} ${member.attributes.surname}`}
      subtitle={member.attributes.post}
      cover={_cover}
    />
  );
}

TeamMember.defaultProps = {
  className: '',
};

interface ITeamMemberProps {
  className?: string;
  member: ITeamMember;
}
