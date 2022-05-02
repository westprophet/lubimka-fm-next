import IChannel from '../../../../../interfaces/IChannel';
import RadioHearthAPI from '../../../global';
import tools from '../../../../../tools';
import { ITrackRadioheartPrev } from '../../../../../interfaces/ITrackRadioheart';

//Получаем ВСЕ данные из потока радио
export const getLastTracks = async ({
  c,
  count,
}: IGetLastTracksParams): Promise<null | ITrackRadioheartPrev[]> => {
  if (!c) return null;
  const baseURL = tools.IChannel.getBaseURL(c);
  const user = c.attributes.stream.user;
  try {
    const { data }: IGetLastTracksResponse = await RadioHearthAPI.get(`${baseURL}/api/json`, {
      params: {
        userlogin: user,
        api: 'lasttrack',
        count: count ?? 20,
      },
    });
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export interface IGetLastTracksParams {
  c?: IChannel;
  count?: number;
}

export interface IGetLastTracksResponse {
  data: ITrackRadioheartPrev[];
}

export default getLastTracks;
