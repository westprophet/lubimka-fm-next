import type { NextPage } from 'next';
import ErrorPage from '@pages/ErrorPage';

const Error404: NextPage = () => {
  return <ErrorPage code={404} title="Not found" />;
};

export default Error404;
