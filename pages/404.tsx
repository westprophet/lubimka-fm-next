import type { NextPage } from 'next';
import ErrorPage from '@pages/ErrorPage';

import { getStaticProps } from '../functions/getGlobalStaticProps';

const Error404: NextPage = () => {
  return <ErrorPage code={404} title="Not found" />;
};

export { getStaticProps };

export default Error404;
