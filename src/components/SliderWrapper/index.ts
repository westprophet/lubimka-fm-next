import SliderWrapper from './SliderWrapper';
import Slide from './components/Slide';
import SideBar from './components/SideBar';
import Provider from './contexts/SliderWrapperManager';
import withSliderWrapperManager from './withSliderWrapperManager';

export { withSliderWrapperManager };
export default {
  Wrapper: SliderWrapper,
  Slide: Slide,
  SideBar: SideBar,
  Provider: Provider,
};
