import IRadioHearthStreamDataMount from './IRadioHearthStreamDataMount';

export default interface IRadioHearthStreamData {
  Copyright: 'icemaster@localhost';
  Location: 'Earth';
  mounts: IRadioHearthStreamDataMount[];
  total_listeners: number;
}
