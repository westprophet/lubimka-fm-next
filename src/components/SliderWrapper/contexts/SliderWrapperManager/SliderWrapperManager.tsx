/**
 * Created by westp on 12.04.2022
 */

import React, { createContext } from 'react';

import ISliderWrapperManagerValues from './types/ISliderWrapperManagerValues';
import useSliderWrapperManagerData from './hooks/useSliderWrapperManagerData';
import INITIAL_VALUES from './constants/INITIAL_VALUE';

export const SliderWrapperManagerContext =
  createContext<ISliderWrapperManagerValues>(INITIAL_VALUES);

export default function SliderWrapperManager({ children }: ISliderWrapperManagerProps) {
  const value = useSliderWrapperManagerData();
  return (
    <SliderWrapperManagerContext.Provider value={value}>
      {children}
    </SliderWrapperManagerContext.Provider>
  );
}

interface ISliderWrapperManagerProps {
  children: any;
}
