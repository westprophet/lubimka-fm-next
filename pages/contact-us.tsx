import type { NextPage } from 'next';

import { IChannel } from 'src/interfaces';

import ContactUsPage from '../src/pages/ContactUsPage';

const AboutUs: NextPage<IAboutUsProps> = () => {
  return <ContactUsPage />;
};

interface IAboutUsProps {
  // team: ITeamMember[];
  channels?: IChannel[];
}

export default AboutUs;
