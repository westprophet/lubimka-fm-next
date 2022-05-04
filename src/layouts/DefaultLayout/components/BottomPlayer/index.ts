import React from 'react';
import BottomPlayer from './BottomPlayer';

export default React.memo(BottomPlayer, (p, n) => {
  return (
    p.fixed === n.fixed &&
    p.show === n.show &&
    p.transparent === n.transparent &&
    p.pinned === n.pinned &&
    p.isOpenChannelMenu === n.isOpenChannelMenu
  );
});
