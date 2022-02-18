import IChannel from 'src/interfaces/IChannel';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { CHANNELS } from '../constants';

export default function useChannels(): [IChannel[], Dispatch<SetStateAction<IChannel[]>>] {
  //Каналы и канал по умолчанию
  const [channels, setChannels] = useState<IChannel[]>(CHANNELS);
  useEffect(() => {}, []);
  return [channels, setChannels];
}
