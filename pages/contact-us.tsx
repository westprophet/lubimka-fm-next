import type { NextPage } from 'next';
import ContactUsPage from '../src/pages/ContactUsPage';
import { getStaticProps } from '../functions/getGlobalStaticProps';
import { NextSeo } from 'next-seo';
import React from 'react';

const AboutUs: NextPage = () => {
  return (
    <>
      <NextSeo title="Контакты" description="Связаться с командой Lubimka.FM" />
      <ContactUsPage />
    </>
  );
};

export { getStaticProps };

export default AboutUs;
