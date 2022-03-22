import StrapiAxios from '../../global';
import IChannel from 'src/interfaces/IChannel';

export default async function getChannels(): Promise<IChannel[]> {
  try {
    const { data } = await StrapiAxios.get('/radio-shannels', {
      params: {
        populate: '*',
      },
    });
    return data.data;
  } catch (e) {
    return [];
  }
}
