import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { useContext } from 'react';
import { RadioPlayerContext } from '../../src/contexts/RadioPlayerManager';
// import { useRouter } from 'next/router';
import BroadcastPage from '@pages/BroadcastPage';

const Channels: NextPage = () => {
  const rm = useContext(RadioPlayerContext);
  // const r = useRouter();

  // useEffect(() => {
  //   r.push(`/broadcast/${rm.channel?.id}/`);
  // }, [r, rm.channel?.id]);

  if (rm.channel) return <BroadcastPage channel={rm.channel} />;
  else return <div></div>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default Channels;
