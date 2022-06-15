import IPlayerManagerValues from '../types/IPlayerManagerValues';

const INITIAL_VALUES: IPlayerManagerValues = {
  status: 'paused',
  audioRef: null,
  play: () => {},
  stop: () => {},
  toggle: () => {},
  set: () => {},
  setPrev: () => {},
  setNext: () => {},
  channel: null,
  channels: null,
  id: '',
  stream: null,
  isLoadingChannels: true,
};

export default INITIAL_VALUES;
