/**
 * Created by westp on 28.05.2022
 */

import React, { useCallback } from 'react';
import s from './VirtualListTrackAlt.module.scss';
import cn from 'classnames';
import AutoSizer from 'react-virtualized-auto-sizer';
import RadioTrack from 'components/tracks/RadioTrack';
import { ITrackRadioheart } from 'interfaces/ITrackRadioheart';
import List from 'react-virtualized/dist/commonjs/List';
import WindowScroller from 'react-virtualized/dist/commonjs/WindowScroller';

import useBreakpoint from 'hooks/useBreakpoint';

import TOrderTrackViewMode from '../../types/TOrderTrackViewMode';
import { useRouter } from 'next/router';
import IChannel from 'interfaces/IChannel';
import { Button } from '@mui/material';

export default function VirtualListTrackAlt({
  className,
  tracks,
  viewMode,
  channel,
}: IVirtualListProps) {
  const b = useBreakpoint();
  const r = useRouter();
  //Формируем строку
  const renderRow = useCallback(
    // @ts-ignore
    ({ key, index, style }) => {
      // @ts-ignore
      const url = `/broadcast/${channel.id}/order/track?id=${tracks[index].id}&name=${tracks[index].name}`;
      if (viewMode === 'full')
        return (
          <RadioTrack
            key={key}
            track={tracks[index]}
            style={style}
            isClickable
            onClick={() => r.push(url)}
            className={cn(s.t)}
          >
            <Button size="small" className={cn(s.a)}>
              заказать
            </Button>
          </RadioTrack>
        );
      else
        return (
          <div key={key} style={style}>
            {tracks[index].name}
          </div>
        );
    },
    [tracks, viewMode]
  );

  return (
    <div className={cn(s.VirtualList, className)}>
      {/*// @ts-ignore*/}
      <WindowScroller>
        {({ height, scrollTop }) => (
          <AutoSizer disableHeight>
            {({ width }) => (
              // @ts-ignore
              <List
                autoHeight
                layout="vertical"
                height={height}
                width={width}
                scrollTop={scrollTop}
                rowCount={tracks.length}
                rowHeight={b.fxl ? 90 : b.lg ? 72 : 50}
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
  channel: IChannel;
  viewMode: TOrderTrackViewMode;
}
