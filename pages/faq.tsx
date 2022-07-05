import type { NextPage } from 'next';
import FAQPage from '@pages/FAQPage';
import { GetStaticProps } from 'next';
import api from 'api/index';
import getGlobalStaticProps, { IGetGlobalStaticProps } from '../functions/getGlobalStaticProps';
import { IFAQItem } from 'interfaces/IFAQItem';

const FAQ: NextPage<IFAQProps> = ({ faqItems }) => {
  return <FAQPage faqItems={faqItems} />;
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
