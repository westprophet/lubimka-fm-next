/**
 * Created by westp on 11.04.2022
 */

import React, { createContext } from 'react';

import IScrollingManagerValues from './types/IScrollingManagerValues';
import SCROLLING_MANAGER_INITIAL_VALUES from './constants/SCROLLING_MANAGER_INITIAL_VALUES';
import useScrollingManagerData from './hooks/useScrollingManagerData';

export const ScrollingManagerContext = createContext<IScrollingManagerValues>(
  SCROLLING_MANAGER_INITIAL_VALUES
);
export default function ScrollingManager({ children }: IScrollingManagerProps) {
  const value = useScrollingManagerData();
  return (
    <ScrollingManagerContext.Provider value={value}>{children}</ScrollingManagerContext.Provider>
  );
}

interface IScrollingManagerProps {
  children: any;
}
