import TracksSection from './TracksSection';
import React from 'react';
import compareTAudioTitle from '../../../../tools/TAudioTitle/compareTAudioTitle';
import { compareIChannels } from '../../../../tools/IChannel';

// @ts-ignore
export default React.memo(TracksSection, (p, n) => {
  const isTitleEqual = compareTAudioTitle(p.title, n.title);
  const isChannelEqual = compareIChannels(p.channel, n.channel);
  return isTitleEqual && isChannelEqual;
});
