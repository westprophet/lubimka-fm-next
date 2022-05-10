/**
 * Created by westp on 13.04.2022
 */

import React from 'react';
import { IClub } from '../../interfaces';
import ClubComponent from 'components/UI/ClubComponent';
import getImageUrl from '../../tools/IWrappedStrapiImage/getImageUrl';

export default function Club({ className, club, resizable }: IClubProps) {
  if (!club) return null;
  const { address, cover, title } = club.attributes;
  const _cover = getImageUrl(cover);
  return (
    <ClubComponent
      className={className}
      address={address}
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
