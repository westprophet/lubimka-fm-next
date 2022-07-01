import type { NextPage } from 'next';
import { IRadioProgram } from 'src/interfaces';
import { IGetGlobalStaticProps } from '../../functions/getGlobalStaticProps';
import RadioProgramsPage from '@pages/RadioProgramsPage';

const RadioPrograms: NextPage<IRadioProgramsProps> = ({ programs }) => {
  return <RadioProgramsPage programs={programs} />;
};

export const getStaticProps: () => Promise<{
  permanent: boolean;
  destination: string;
}> = async () => {
  return {
    destination: '/',
    permanent: false,
  };
};

interface IRadioProgramsProps extends IGetGlobalStaticProps {
  programs: IRadioProgram[];
}

export default RadioPrograms;
