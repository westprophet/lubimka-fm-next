import DefaultLayout from './DefaultLayout';
import {
  PageTitle,
  PageWrapper,
  SectionWrapper,
  FullPageSectionWrapper,
  SectionSliderWrapper,
  DoubleSection,
} from './components';

import { IDefaultLayoutAttributes } from './types';

export type { IDefaultLayoutAttributes };

export {
  DefaultLayout,
  PageWrapper,
  PageTitle,
  SectionWrapper,
  FullPageSectionWrapper,
  SectionSliderWrapper,
  DoubleSection,
};

export default {
  Layout: DefaultLayout,
  PageWrapper: PageWrapper,
  PageTitle: PageTitle,
  Section: SectionWrapper,
  FullPageSection: FullPageSectionWrapper,
  SliderSection: SectionSliderWrapper,
  DoubleSection: DoubleSection,
};
