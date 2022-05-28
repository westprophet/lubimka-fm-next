/**
 * Created by westp on 28.05.2022
 */

import React, { useCallback } from 'react';
import s from './VirtualListTrack.module.scss';
import cn from 'classnames';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import RadioTrack from 'components/tracks/RadioTrack';
import { ITrackRadioheart } from 'interfaces/ITrackRadioheart';
import useBreakpoint from 'hooks/useBreakpoint';

export default function VirtualListTrack({ className, tracks }: IVirtualListProps) {
  const b = useBreakpoint();
  console.log(b);
  const renderRow = useCallback(
    ({
      key, // Unique key within array of rows
      index, // Index of row within collection
      isScrolling, // The List is currently being scrolled
      isVisible, // This row is visible within the List (eg it is not an overscanned row)
      style, // Style object to be applied to row (to position it)
    }) => {
      return (
        <span style={style} key={key}>
          <RadioTrack track={tracks[index]} />
        </span>
      );
    },
    [tracks]
  );
  return (
    <div className={cn(s.VirtualList, className)}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            // initialScrollOffset={100}
            overscanCount={2}
            layout="vertical"
            height={height}
            itemCount={tracks.length}
            itemSize={b.qxl ? 90 : b.fxl ? 72 : 50}
            width={width}
          >
            {renderRow}
          </List>
        )}
      </AutoSizer>
    </div>
  );
}

VirtualListTrack.defaultProps = {
  className: '',
};

interface IVirtualListProps {
  className?: string;
  tracks: ITrackRadioheart[];
}
