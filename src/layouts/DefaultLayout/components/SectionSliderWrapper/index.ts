import SectionSliderWrapper from './SectionSliderWrapper';
import Slider, {
  animationVariants as MSlideAnimationVariants,
} from '../../../../components/SliderWrapper';

export default {
  Wrapper: SectionSliderWrapper,
  Slide: Slider.Slide,
  MSlide: Slider.MSlide,
};

export { MSlideAnimationVariants };
