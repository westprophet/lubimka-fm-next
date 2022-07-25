/**
 * Created by westp on 23.07.2022
 */

import React from 'react';
import s from './ClubsNearbyPage.module.scss';
import cn from 'classnames';
import DefaultLayout from 'layouts/DefaultLayout';
import GoogleMapReact from 'google-map-react';
import useMyLocation from 'hooks/useMyLocation';
import useClubNearby from '@pages/ClubsNearbyPage/hooks/useClubNearby';
import ClubMapMarker from 'components/ClubMapMarker';
import { IClub } from 'interfaces/IClub';
import ClubViewerSection from '@pages/ClubsNearbyPage/ClubViewerSection';

export default function ClubsNearbyPage() {
  const key = process.env.isProd
    ? process.env.NEXT_PUBLIC_GOOGLE_MAP_API
    : process.env.NEXT_PUBLIC_GOOGLE_MAP_API_DEV;
  const location = useMyLocation();
  const { data: clubsNearby, isLoading } = useClubNearby(location);

  return (
    <DefaultLayout.Layout
      className={cn(s.ClubsNearbyPage)}
      header={{ isFix: false, isFixedShow: true, isTransparent: true, isShow: true }}
    >
      <DefaultLayout.DoubleSection.Wrapper>
        <DefaultLayout.DoubleSection.Preview.Wrapper className={cn(s.mapContainer)}>
          {location && (
            <div className={cn(s.map)}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: String(key), language: 'ru', region: 'de' }}
                center={{
                  lat: Number(location.lat),
                  lng: Number(location.lng),
                }}
                defaultCenter={{
                  lat: Number(location.lat),
                  lng: Number(location.lng),
                }}
                defaultZoom={15}
                options={{
                  fullscreenControl: false,
                  zoomControl: false,
                }}
              >
                {clubsNearby?.map((c: IClub) => (
                  <ClubMapMarker club={c} key={`club-${c.id}`} />
                ))}
              </GoogleMapReact>
            </div>
          )}
        </DefaultLayout.DoubleSection.Preview.Wrapper>
        <DefaultLayout.DoubleSection.Content.Wrapper disableAnimation>
          <DefaultLayout.DoubleSection.Content.Container title="Клубы рядом">
            <ClubViewerSection clubs={clubsNearby} isLoading={isLoading} />
          </DefaultLayout.DoubleSection.Content.Container>
        </DefaultLayout.DoubleSection.Content.Wrapper>
      </DefaultLayout.DoubleSection.Wrapper>
    </DefaultLayout.Layout>
  );
}
