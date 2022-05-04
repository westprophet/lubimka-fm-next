import { CHANNELS } from '../constants';
import IChannel from '../../../interfaces/IChannel';
import { getDefaultChannel, getLocalChannel } from '../utils';

//Получение выбранного канала из разных источников
export default function useCurrentChannel(channels: IChannel[]): IChannel {
  const localChannel = getLocalChannel(channels); //Получаем текущий выбранный пользователем канал (тут хранится ключ)
  const defaultChannel = getDefaultChannel(channels); //Получаем канал по умолчанию
  return localChannel ?? defaultChannel ?? CHANNELS[0]; // Отдаем по приоритету
}
