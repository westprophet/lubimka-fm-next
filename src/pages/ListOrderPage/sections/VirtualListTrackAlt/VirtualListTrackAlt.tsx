/**
 * Created by westp on 28.05.2022
 */

import React, { useCallback } from 'react';
import s from './VirtualListTrackAlt.module.scss';
import cn from 'classnames';
import AutoSizer from 'react-virtualized-auto-sizer';
// import { FixedSizeList as List } from 'react-window';
import RadioTrack from 'components/tracks/RadioTrack';
import { ITrackRadioheart } from 'interfaces/ITrackRadioheart';
import { WindowScroller, List } from 'react-virtualized';

export default function VirtualListTrackAlt({ className, tracks }: IVirtualListProps) {
  const renderRow = useCallback(
    ({
      key, // Unique key within array of rows
      index, // Index of row within collection
      isScrolling, // The List is currently being scrolled
      isVisible, // This row is visible within the List (eg it is not an overscanned row)
      style, // Style object to be applied to row (to position it)
    }) => {
      return (
        <div style={style} key={key}>
          <RadioTrack track={tracks[index]} />
        </div>
      );
    },
    [tracks]
  );

  return (
    <div className={cn(s.VirtualList, className)}>
      <WindowScroller>
        {({ height, scrollTop }) => (
          <AutoSizer disableHeight>
            {({ width }) => (
              <List
                autoHeight
                layout="vertical"
                height={height}
                width={width}
                scrollTop={scrollTop}
                overscanRowCount={5}
                rowCount={tracks.length}
                rowHeight={60}
                rowRenderer={renderRow}
              />
            )}
          </AutoSizer>
        )}
      </WindowScroller>
    </div>
  );
}

VirtualListTrackAlt.defaultProps = {
  className: '',
};

interface IVirtualListProps {
  className?: string;
  tracks: ITrackRadioheart[];
}
