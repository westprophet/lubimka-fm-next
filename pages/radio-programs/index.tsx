import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import api from '../../src/api';
import { IRadioProgram } from 'src/interfaces';
import getGlobalStaticProps, { IGetGlobalStaticProps } from '../../functions/getGlobalStaticProps';
import RadioProgramsPage from '@pages/RadioProgramsPage';

const RadioPrograms: NextPage<IRadioProgramsProps> = ({ programs }) => {
  return <RadioProgramsPage programs={programs} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const channels = await api.strapi.channels.getChannels();
  return await getGlobalStaticProps({
    props: {
      channels,
    },
  });
};

interface IRadioProgramsProps extends IGetGlobalStaticProps {
  programs: IRadioProgram[];
}

export default RadioPrograms;
