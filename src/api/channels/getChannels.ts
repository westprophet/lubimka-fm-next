import Axios from '../globalApi';
import IChannel from 'src/interfaces/IChannel';

export default async function getChannels(): Promise<IChannel[]> {
  try {
    const { data } = await Axios.get('/radio-shannels');
    console.log(data);
    return data;
  } catch (e) {
    return [];
  }
}
