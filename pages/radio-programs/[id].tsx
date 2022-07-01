import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import api from '../../src/api';
import { IRadioProgram } from 'src/interfaces';
import getGlobalStaticProps, { IGetGlobalStaticProps } from '../../functions/getGlobalStaticProps';
import RadioProgramPage from '@pages/RadioProgramPage';
import { GetStaticPropsContext } from 'next/types';

const RadioPrograms: NextPage<IRadioProgramsProps> = ({ program }) => {
  return <RadioProgramPage program={program} />;
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<IRadioProgramsPageParams>) => {
  const program = await api.strapi.programs.getRadioProgram({ id: String(params?.id) });
  return await getGlobalStaticProps({
    revalidate: Number(process.env['NEXT_PUBLIC_REVALIDATE_INTERVAl']),
    props: {
      program,
    },
  });
};

//https://nextjs.org/docs/api-reference/data-fetching/get-static-paths
export async function getStaticPaths() {
  const programs = await api.strapi.programs.getRadioPrograms(); //Запрашиваем данные о канале
  const paths = programs?.map((program: IRadioProgram) => ({
    params: { id: String(program.id) },
  }));
  return { paths, fallback: false };
}

//Данные внутренней страницы
interface IRadioProgramsProps extends IGetGlobalStaticProps {
  program: IRadioProgram;
}

//Получаемые по ссылке параметры страницы
type IRadioProgramsPageParams = {
  id: string;
};

export default RadioPrograms;
