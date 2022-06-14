import IChannel from 'src/interfaces/IChannel';
import { TAudioManagerStatus } from 'types/TAudioManagerStatus';
import { MutableRefObject } from 'react';
import TCreatedStream from '../../../types/TCreatedStream';

export default interface IPlayerManagerValues {
  status: TAudioManagerStatus;
  audioRef: MutableRefObject<HTMLAudioElement | null> | null;
  play: () => void;
  stop(): any;
  toggle(): any;
  set(c: IChannel, isAndPlay?: boolean): any;
  setPrev(isAndPlay?: boolean): void;
  setNext(isAndPlay?: boolean): void;
  channel: IChannel | null;
  channels: IChannel[] | null;
  id: string;
  stream: TCreatedStream | null;
  isLoadingChannel: boolean;
}
