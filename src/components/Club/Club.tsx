/**
 * Created by westp on 13.04.2022
 */

import React from 'react';
import { IClub } from '../../interfaces';
import ClubComponent from 'components/UI/ClubComponent';
import getImageUrl from '../../tools/IWrappedStrapiImage/getImageUrl';
import useBreakpoint from 'hooks/useBreakpoint';

export default function Club({ className, club, resizable }: IClubProps) {
  const b = useBreakpoint();
  if (!club) return null;
  const { address, cover, title } = club.attributes;
  const _cover = getImageUrl(cover, b.xxl ? 'middle' : 'small');
  return (
    <ClubComponent
      className={className}
      address={address}
      link={`/club-life/clubs/${club.id}`}
      cover={_cover}
      title={title}
      resizable={resizable}
    />
  );
}

Club.defaultProps = {
  className: '',
};

interface IClubProps {
  className?: string;
  club: IClub;
  resizable?: boolean;
}
