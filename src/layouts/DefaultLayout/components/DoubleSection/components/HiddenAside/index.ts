import HiddenAside from './HiddenAside';
import HiddenAsideTitle from './components/HiddenAsideTitle';
import HiddenAsideInner from './components/HiddenAsideInner';
import HiddenAsideScroller, { MHiddenAsideScroller } from './components/HiddenAsideScroller';
import HiddenAsideInnerContainer from './components/HiddenAsideInnerContainer';
// import { motion } from 'framer-motion';

// const MHiddenAside = motion(HiddenAside);

export default {
  Wrapper: HiddenAside,
  // MWrapper: MHiddenAside,
  Title: HiddenAsideTitle,
  Inner: HiddenAsideInner,
  Container: HiddenAsideInnerContainer,
  Scroller: HiddenAsideScroller,
};
