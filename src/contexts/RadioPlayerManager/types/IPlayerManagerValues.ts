import { MutableRefObject } from 'react';
import IChannel from 'src/interfaces/IChannel';
import { TAudioManagerStatus } from '../../../types/TAudioManagerStatus';

export default interface IPlayerManagerValues {
  status: TAudioManagerStatus;
  play(): any;
  stop(): any;
  channel: IChannel | null;
  audioRef: MutableRefObject<HTMLAudioElement> | null;
  id: string;
}
