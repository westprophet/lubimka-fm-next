/**
 * Created by westp on 25.07.2022
 */

import React from 'react';
import s from './ClubViewerSection.module.scss';
import cn from 'classnames';
import { ClubSkeleton } from 'components/UI/ClubComponent';
import { IClub } from 'interfaces/IClub';
import Club from 'components/Club';
import isEmptyArray from 'utils/isEmptyArray';

export default function ClubViewerSection({
  className,
  isLoading,
  clubs,
}: IClubViewerSectionProps) {
  let containerInner: any = [];
  const isEmpty = isEmptyArray(clubs);

  if (isLoading)
    for (let i = 0; i <= 6; i++) {
      containerInner.push(<ClubSkeleton resizable />);
    }
  else if (!isEmpty)
    containerInner = clubs?.map((c: IClub) => <Club club={c} key={`club-${c.id}`} />);
  else containerInner = <div className={cn(s.empty)}>В радиусе клубов не найдено</div>;
  return <div className={cn(s.ClubViewerSection, className)}>{containerInner}</div>;
}

ClubViewerSection.defaultProps = {
  className: '',
};

interface IClubViewerSectionProps {
  className?: string;
  isLoading?: boolean;
  clubs?: IClub[] | null;
}
