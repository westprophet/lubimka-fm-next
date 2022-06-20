import type { NextPage } from 'next';
import { getStaticProps } from '../functions/getGlobalStaticProps';
import HowToListingPage from '@pages/HowToListingPage';

const HowToListing: NextPage = () => {
  return <HowToListingPage />;
};

export { getStaticProps };

export default HowToListing;
