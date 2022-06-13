import IChannel from '../../../../../interfaces/IChannel';
import RadioHearthAPI from '../../../global';
import tools from '../../../../../tools';
import { ITrackRadioheartNew } from 'interfaces/ITrackRadioheart';

export const getNewTracks = async ({
  c,
  count,
}: IGetNextTracksParams): Promise<null | ITrackRadioheartNew[]> => {
  if (!c) return null;
  const baseURL = tools.IChannel.getBaseURL(c);
  const user = c.attributes.stream.user;
  try {
    const { data }: IGetNextTracksResponse = await RadioHearthAPI.get(`${baseURL}/api/json`, {
      params: {
        userlogin: user,
        api: 'newsongs',
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
  data: ITrackRadioheartNew[];
}

export default getNewTracks;
