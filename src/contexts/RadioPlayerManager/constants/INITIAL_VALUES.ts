import IPlayerManagerValues from '../types/IPlayerManagerValues';

const INITIAL_VALUES: IPlayerManagerValues = {
  status: 'paused',
  audioRef: null,
  play: () => {},
  stop: () => {},
  toggle: () => {},
  setPrevChannel: () => {},
  setNextChannel: () => {},
  channel: null,
  id: '',
  stream: null,
};

export default INITIAL_VALUES;
