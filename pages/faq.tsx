import type { NextPage } from 'next';
import FAQPage from '@pages/FAQPage';
import { GetStaticProps } from 'next';
import api from 'api/index';
import getGlobalStaticProps, { IGetGlobalStaticProps } from '../functions/getGlobalStaticProps';
import { IFAQItem } from 'interfaces/IFAQItem';
import { NextSeo } from 'next-seo';
import React from 'react';

const FAQ: NextPage<IFAQProps> = ({ faqItems }) => {
  return (
    <>
      <NextSeo title="FAQ" description="Вопросы и ответы" />
      <FAQPage faqItems={faqItems} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: faqItems } = await api.strapi.faq.getFAQItems();
  return await getGlobalStaticProps({
    revalidate: Number(process.env['NEXT_PUBLIC_REVALIDATE_INTERVAL']),
    props: {
      faqItems,
    },
  });
};

interface IFAQProps extends IGetGlobalStaticProps {
  faqItems: IFAQItem[];
}

export default FAQ;
