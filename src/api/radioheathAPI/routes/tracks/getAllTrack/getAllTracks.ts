import IChannel from '../../../../../interfaces/IChannel';
import RadioHearthAPI from '../../../global';
import tools from '../../../../../tools';
import { ITrackRadioheartPrev } from 'interfaces/ITrackRadioheart';

export const getAllTracks = async ({
  c,
}: IGetAllTracksParams): Promise<null | ITrackRadioheartPrev[]> => {
  if (!c) return null;
  const baseURL = tools.IChannel.getBaseURL(c);
  const user = c.attributes.stream.user;
  try {
    const { data }: IGetAllTracksResponse = await RadioHearthAPI.get(`${baseURL}/api/json`, {
      params: {
        userlogin: user,
        api: 'newsongorder',
        all: true,
      },
    });
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export interface IGetAllTracksParams {
  c?: IChannel;
}

export interface IGetAllTracksResponse {
  data: ITrackRadioheartPrev[];
}

export default getAllTracks;
