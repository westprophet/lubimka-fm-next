import DefaultLayout from './DefaultLayout';
import {
  PageTitle,
  PageWrapper,
  SectionWrapper,
  FullPageSectionWrapper,
  SectionSliderWrapper,
} from './components';
import { IDefaultLayoutAttributes } from './types';

export type { IDefaultLayoutAttributes };

export default {
  Layout: DefaultLayout,
  PageWrapper: PageWrapper,
  PageTitle: PageTitle,
  Section: SectionWrapper,
  FullPageSection: FullPageSectionWrapper,
  SliderSection: SectionSliderWrapper,
};
