import IPlayerManagerValues from '../types/IPlayerManagerValues';

export const INITIAL_VALUES: IPlayerManagerValues = {
  status: 'paused',
  audioRef: null,
  play: () => {},
  stop: () => {},
  channel: null,
  id: '',
};

export default INITIAL_VALUES;
