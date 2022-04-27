import IPlayerManagerValues from '../types/IPlayerManagerValues';

const INITIAL_VALUES: IPlayerManagerValues = {
  status: 'paused',
  audioRef: null,
  play: () => {},
  stop: () => {},
  toggle: () => {},
  channel: null,
  id: '',
  data: null,
};

export default INITIAL_VALUES;
