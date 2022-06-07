import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { useContext, useEffect } from 'react';
import { RadioPlayerContext } from '../../src/contexts/RadioPlayerManager';
import { useRouter } from 'next/router';

const Channels: NextPage = () => {
  const rm = useContext(RadioPlayerContext);
  const r = useRouter();
  useEffect(() => {
    r.push(`/broadcast/${rm.channel?.id}/`);
  }, [r, rm.channel?.id]);
  return <div></div>;
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default Channels;
