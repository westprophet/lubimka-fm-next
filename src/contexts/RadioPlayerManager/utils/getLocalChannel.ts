import IChannel from '../../../interfaces/IChannel';
// import ls from 'universal-localstorage';
import isEmptyArray from '../../../utils/isEmptyArray';
import { LOCAL_KEY, FIELD_KEY } from '../constants';

const getLocalChannel = (channels: IChannel[]): IChannel | null => {
  if (typeof window === 'undefined') return null;

  if (isEmptyArray(channels)) {
    //console.error('ChannelManager: getLocalChannel', 'channels: isEmptyArray');
    return null;
  }
  const localID = window.localStorage.getItem(LOCAL_KEY); // Вытягиваем ключ
  let foundedLocal: IChannel | null = null;
  //Ищем канал по локальному ключу
  if (localID) {
    // @ts-ignore
    foundedLocal = channels.find((c: IChannel) => c[FIELD_KEY] === localID);
  }
  return foundedLocal;
};
export default getLocalChannel;
