import IRadioHearthStreamData from '../api/radioheathAPI/types/IRadioHearthStreamData';
import TRadioHearthStreamDataStatus from './TRadioHearthStreamDataStatus';

type TCreatedStream = {
  data: IRadioHearthStreamData | null;
  status: TRadioHearthStreamDataStatus;
  startStream(): any;
  stopStream(): any;
  pauseStream(): any;
  isCurrentChannel?: boolean;
};
export default TCreatedStream;
