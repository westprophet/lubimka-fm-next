import type { NextPage } from 'next';
import HomePage from '../src/pages/HomePage';

import { getStaticProps } from './home';
import { IAuthor, IChannel, IClub, IEvent, IPartner } from '../src/interfaces';

const RadioBroadcast: NextPage<IRadioBroadcastProps> = ({
  events,
  clubs,
  authors,
  partners,
  channels,
}) => {
  return (
    <HomePage
      events={events}
      clubs={clubs}
      authors={authors}
      partners={partners}
      channels={channels}
    />
  );
};

export { getStaticProps };

interface IRadioBroadcastProps {
  events: IEvent[];
  clubs: IClub[];
  authors: IAuthor[];
  partners: IPartner[];
  channels: IChannel[];
}

export default RadioBroadcast;
