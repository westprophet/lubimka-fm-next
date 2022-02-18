import IChannel from '../../../interfaces/IChannel';
import { LOCAL_KEY } from '../constants';
import ls from 'universal-localstorage';
import isEmptyArray from '../../../utils/isEmptyArray';

const getLocalChannel = (channels: IChannel[]): IChannel | null => {
  if (isEmptyArray(channels)) {
    console.error('ChannelManager: getLocalChannel', 'channels: isEmptyArray');
    return null;
  }
  const localID = ls.get(LOCAL_KEY); // Вытягиваем ключ
  let foundedLocal: IChannel | null = null;
  //Ищем канал по локальному ключу
  if (localID) foundedLocal = channels.find((c: IChannel) => c.title === localID);
  return foundedLocal;
};
export default getLocalChannel;
