import type { NextPage } from 'next';
import ErrorPage from '@pages/ErrorPage';

const Error500: NextPage = () => {
  return <ErrorPage code={500} title="Internal Server Error" />;
};

export default Error500;
