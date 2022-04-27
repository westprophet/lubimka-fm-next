import { MutableRefObject, RefObject } from 'react';
import IChannel from 'src/interfaces/IChannel';
import { TAudioManagerStatus } from '../../../types/TAudioManagerStatus';
import IRadioHearthStreamData from '../../../api/radioheathAPI/types/IRadioHearthStreamData';

export default interface IPlayerManagerValues {
  status: TAudioManagerStatus;
  play(): any;
  stop(): any;
  toggle(): any;
  channel: IChannel | null;
  audioRef: RefObject<HTMLAudioElement> | null;
  id: string;
  data: IRadioHearthStreamData | null | undefined;
}
