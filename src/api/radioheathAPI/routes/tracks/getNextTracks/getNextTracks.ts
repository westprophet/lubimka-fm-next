import IChannel from '../../../../../interfaces/IChannel';
import RadioHearthAPI from '../../../global';
import tools from '../../../../../tools';
import { ITrackRadioheartNext, ITrackRadioheartPrev } from 'interfaces/ITrackRadioheart';

//Получаем ВСЕ данные из потока радио
export const getNextTracks = async ({
  c,
  count,
}: IGetNextTracksParams): Promise<null | ITrackRadioheartNext[]> => {
  if (!c) return null;
  const baseURL = tools.IChannel.getBaseURL(c);
  const user = c.attributes.stream.user;
  try {
    const { data }: IGetNextTracksResponse = await RadioHearthAPI.get(`${baseURL}/api/json`, {
      params: {
        userlogin: user,
        api: 'nexttrack',
        count: count ?? 20,
      },
    });
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export interface IGetNextTracksParams {
  c?: IChannel;
  count?: number;
}

export interface IGetNextTracksResponse {
  data: ITrackRadioheartNext[];
}

export default getNextTracks;
