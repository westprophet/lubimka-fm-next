import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import AdvertisingPage from 'src/pages/AdvertisingPage';
import getGlobalStaticProps from 'functions/getGlobalStaticProps';
import { IAdvertising } from 'interfaces/index';

const Advertising: NextPage<IAdvertisingPageProps> = ({ adv }) => {
  return <AdvertisingPage adv={adv} />;
};

export const getStaticProps: GetStaticProps = async () => {
  return await getGlobalStaticProps();
};

export default Advertising;

interface IAdvertisingPageProps {
  adv: IAdvertising[];
}
