export default interface ISliderWrapperManagerValues {
  next(): any;
  prev(): any;
  play(): any;
  pause(): any;
  goTo(index: number): any;
  setCount(index: number): any;
  setCurrentSlideIndex(index: number): any;
  currentSlideIndex: number;
  ref: any | null;
  count: number | null;
}
