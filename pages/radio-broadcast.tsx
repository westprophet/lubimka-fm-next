import type { NextPage } from 'next';
import HomePage from '../src/pages/HomePage';

import { getStaticProps } from './home';
import { IAuthor, IClub, IEvent } from '../src/interfaces';

const RadioBroadcast: NextPage<IRadioBroadcastProps> = ({ events, clubs, authors }) => {
  return <HomePage events={events} clubs={clubs} authors={authors} />;
};

export { getStaticProps };

interface IRadioBroadcastProps {
  events: IEvent[];
  clubs: IClub[];
  authors: IAuthor[];
}

export default RadioBroadcast;
