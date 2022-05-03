import RadioPlayerManager, { RadioPlayerContext } from './RadioPlayerManager';

import useChannelStream from './hooks/useChannelStream'; //Создаем поток
import useGetChannelStream from './hooks/useGetChannelStream'; //Создаем поток
import useChannelStreamAlt from './hooks/useChannelStreamAlt'; //Создаем поток
import useGetStaticChannelStream from './hooks/useGetStaticChannelStream'; //Создаем поток

export {
  RadioPlayerContext,
  useChannelStream,
  useGetChannelStream,
  useChannelStreamAlt,
  useGetStaticChannelStream,
};
export default RadioPlayerManager;
