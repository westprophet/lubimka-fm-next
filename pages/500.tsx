import type { NextPage } from 'next';
import ErrorPage from '@pages/ErrorPage';
import { getStaticProps } from '../functions/getGlobalStaticProps';

const Error500: NextPage = () => {
  return <ErrorPage code={500} title="Internal Server Error" />;
};
export { getStaticProps };

export default Error500;
