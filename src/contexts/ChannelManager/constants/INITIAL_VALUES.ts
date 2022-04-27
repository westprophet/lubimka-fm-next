import IChannelManagerValues from '../types/IChannelManagerState';

const INITIAL_VALUES: IChannelManagerValues = {
  current: null,
  channels: null,
  isLoadingChannels: false,
  setChannel: () => {},
  prevChannel: () => {},
  nextChannel: () => {},
};

export default INITIAL_VALUES;
