import IRadioHearthStreamData from '../api/radioheathAPI/types/IRadioHearthStreamData';
import TRadioHearthStreamDataStatus from './TRadioHearthStreamDataStatus';
import TAudioTitle from './TAudioTitle';

type TCreatedStream = {
  data: IRadioHearthStreamData | null | undefined;
  status: TRadioHearthStreamDataStatus;
  startStream(): any;
  stopStream(): any;
  pauseStream(): any;
  current: TAudioTitle | null;
  isCurrentChannel?: boolean;
  isLoading: boolean;
  isError: boolean;
};
export default TCreatedStream;
