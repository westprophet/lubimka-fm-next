import ISliderWrapperManagerValues from './../types/ISliderWrapperManagerValues';
import Slider from 'react-slick';

const INITIAL_VALUE: ISliderWrapperManagerValues = {
  next: () => {},
  prev: () => {},
  play: () => {},
  pause: () => {},
  goTo: (index: number) => {},
  setCurrentSlideIndex: (index: number) => {},
  currentSlideIndex: 1,
  ref: Slider,
};

export default INITIAL_VALUE;
