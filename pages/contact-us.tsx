import type { NextPage } from 'next';
import ContactUsPage from '../src/pages/ContactUsPage';
import { getStaticProps } from '../functions/getGlobalStaticProps';

const AboutUs: NextPage = () => {
  return <ContactUsPage />;
};

export { getStaticProps };

export default AboutUs;
