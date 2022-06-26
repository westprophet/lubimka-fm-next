import IChannel from '../../../../../interfaces/IChannel';
import RadioHearthAPI from '../../../global';
import tools from '../../../../../tools';
import IOrderTrackResponse from 'api/radioheathAPI/routes/tracks/orderTrack/types/IOrderTrackResponse';
import TOrderTrackStatusType from 'api/radioheathAPI/routes/tracks/orderTrack/types/TOrderTrackStatusType';

export const orderTrack = async ({
  c,
  id,
  comment,
}: IGetAllTracksParams): Promise<IOrderTrackResponse | null> => {
  if (!c || !id) return null;

  const baseURL = tools.IChannel.getBaseURL(c);
  const user = c.attributes.stream.user;
  try {
    const { data }: { data: IOrderTrackResponse } = await RadioHearthAPI.get(
      `${baseURL}/api/json`,
      {
        params: {
          userlogin: user,
          api: 'newsongorder',
          song_id: id,
          confirm: true,
          comment: comment ?? 'Быстрый заказ',
        },
      }
    );
    if (data.status === 'ordersDisabled' || data.user_deny_duration) throw data;
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export interface IGetAllTracksParams {
  c?: IChannel | null;
  id?: string | number;
  comment?: string;
}

export default orderTrack;
