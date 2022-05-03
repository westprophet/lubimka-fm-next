import IChannel from 'src/interfaces/IChannel';
import { TAudioManagerStatus } from '../../../types/TAudioManagerStatus';
import { MutableRefObject } from 'react';
import TCreatedStream from '../../../types/TCreatedStream';

export default interface IPlayerManagerValues {
  status: TAudioManagerStatus;
  play: (c?: IChannel) => void;
  stop(): any;
  audioRef: MutableRefObject<HTMLAudioElement | null>;
  toggle(c?: IChannel): any;
  setPrevChannel(): void;
  setNextChannel(): void;
  channel: IChannel | null;
  id: string;
  stream: TCreatedStream;
}
