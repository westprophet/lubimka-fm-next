import SectionWrapper from './SectionWrapper';
import InnerSectionWrapper from './components/InnerSectionWrapper';
import SectionTitle, { MSectionTitle } from './components/SectionTitle';
import { motion } from 'framer-motion';

export { InnerSectionWrapper };
export default {
  Wrapper: SectionWrapper,
  MWrapper: motion(SectionWrapper),
  Inner: InnerSectionWrapper,
  Title: SectionTitle,
  MTitle: MSectionTitle,
};
