import SliderWrapper from './SliderWrapper';
import Slide, { MSlide, animationVariants } from './components/Slide';
import SideBar from './components/SideBar';
import Provider from './contexts/SliderWrapperManager';
import withSliderWrapperManager from './withSliderWrapperManager';

export { withSliderWrapperManager, animationVariants };

export default {
  Wrapper: SliderWrapper,
  Slide: Slide,
  MSlide: MSlide,
  SideBar: SideBar,
  Provider: Provider,
};
