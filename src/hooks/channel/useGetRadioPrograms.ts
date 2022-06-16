import { IChannel, IRadioProgram } from '../../interfaces';
import { useQuery } from 'react-query';
import api from 'api/index';

export default function useGetRadioPrograms({
  c,
  initialPrograms,
  disabled,
}: IUseGetRadioProgramsArg): IUseGetRadioProgramsReturn {
  const { isError, data, isLoading } = useQuery(
    ['getRadioPrograms', c.attributes.name],
    () => api.strapi.programs.getRadioProgramsByChannel({ channelID: c.id }),
    {
      retryDelay: 2000,
      enabled: !!c && !disabled,
      refetchOnWindowFocus: false,
      initialData: initialPrograms,
    }
  );
  return {
    data: data ?? null,
    isError,
    isLoading,
  };
}
interface IUseGetRadioProgramsArg {
  c: IChannel;
  disabled?: boolean;
  initialPrograms?: IRadioProgram[] | null;
}

interface IUseGetRadioProgramsReturn {
  isError: boolean;
  isLoading: boolean;
  data: IRadioProgram[] | null;
}
