import TracksSection from './TracksSection';
import React from 'react';

export default React.memo(TracksSection, (p, n) => {
  return p.title?.title === n.title?.title && p.title?.artist === n.title?.artist;
});
