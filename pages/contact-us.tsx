import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from '../src/api';
import { IChannel, ITeamMember } from 'src/interfaces';
import AboutUsPage from '../src/pages/AboutUsPage';
import ContactUsPage from '../src/pages/ContactUsPage';

const AboutUs: NextPage<IAboutUsProps> = ({ channels }) => {
  return <ContactUsPage />;
};

// export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
//   const { data: team } = await api.strapi.team.getTeamMembers();
//   return {
//     props: {
//       // channels,
//       team,
//     },
//   };
// };

interface IAboutUsProps {
  // team: ITeamMember[];
  channels?: IChannel[];
}

export default AboutUs;
