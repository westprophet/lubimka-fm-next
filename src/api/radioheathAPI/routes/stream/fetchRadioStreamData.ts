import IChannel from '../../../../interfaces/IChannel';
import RadioHearthAPI from '../../global';
import tools from '../../../../tools';
import IRadioHearthStreamData from '../../types/IRadioHearthStreamData';

//Получаем ВСЕ данные из потока радио
export const fetchRadioStreamData = async (
  c?: IChannel | null
): Promise<null | IRadioHearthStreamData> => {
  if (!c) return null;
  const baseURL = tools.IChannel.getBaseURL(c);
  const port = tools.IChannel.getPort(c);
  try {
    const { data }: IFetchRadioStreamDataResponse = await RadioHearthAPI.get(
      `${baseURL}:${port}/json.xsl`
    );
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export interface IFetchRadioStreamDataResponse {
  data: IRadioHearthStreamData;
}

export default fetchRadioStreamData;
