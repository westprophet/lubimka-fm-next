import ISliderWrapperManagerValues from './../types/ISliderWrapperManagerValues';
import { useCallback, useRef, useState } from 'react';
// import Slider from 'react-slick';
// const Slider = import('react-slick');

export default function useSliderWrapperManagerData(): ISliderWrapperManagerValues {
  const ref = useRef<any>();
  const count = useRef<number | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(1);
  const next = useCallback(() => {
    if (!ref.current) return;
    ref.current.slickNext();
  }, []);
  const prev = useCallback(() => {
    if (!ref.current) return;
    ref.current.slickPrev();
  }, []);

  const play = useCallback(() => {
    if (!ref.current) return;
    ref.current.slickPlay();
  }, []);

  const pause = useCallback(() => {
    if (!ref.current) return;
    ref.current.slickPause();
  }, []);

  const goTo = useCallback((index: number) => {
    if (!ref.current) return;
    ref.current.slickGoTo(index);
  }, []);

  const setCount = useCallback((index: number) => {
    count.current = index;
  }, []);

  return {
    next,
    play,
    pause,
    prev,
    goTo,
    ref,
    count: count.current ?? 0,
    setCount,
    setCurrentSlideIndex,
    currentSlideIndex,
  };
}
