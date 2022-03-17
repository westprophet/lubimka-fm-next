import IChannelManagerValues from '../types/IChannelManagerState';

const INITIAL_VALUES: IChannelManagerValues = {
  current: null,
  channels: null,
  isLoadingChannels: false,
  setChannel: () => {},
};

export default INITIAL_VALUES;
