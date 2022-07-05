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
import isEmptyArray from '../../../../utils/isEmptyArray';
// import SearchInput from 'components/SearchInput';

//Виртуальный список специально для отображения большого количества элементов
export default function VirtualListTrack({ className, tracks }: IVirtualListProps) {
  const b = useBreakpoint();

  //Формируем ключ
  const itemKey = useCallback((index: string | number, data: { [x: string]: any }) => {
    const item = data[index];
    return item.id;
  }, []);

  //Формируем строку
  // @ts-ignore
  const renderRow = useCallback(({ data, key, index, style }) => {
    return <RadioTrack key={key} track={data[index]} style={style} isClickable />;
  }, []);

  if (isEmptyArray(tracks)) {
    return <div className={cn(s.Empty)}>Ничего не найдено</div>;
  }
  return (
    <div className={cn(s.VirtualList, className)}>
      {/*<SearchInput onChange={() => {}} />*/}
      <AutoSizer>
        {({ height, width }) => (
          <List
            layout="vertical"
            overscanCount={b.fxl ? 10 : 2}
            itemData={tracks}
            itemKey={itemKey}
            height={height}
            itemCount={tracks.length}
            itemSize={b.fxl ? 90 : b.lg ? 72 : 55}
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
