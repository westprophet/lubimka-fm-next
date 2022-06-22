import AsideBar from './AsideBar';
import AsideMiniPlayer from './components/AsideMiniPlayer';
import InnerWrapper from './sections/InnerWrapper';
import TopContainerWrapper from './sections/TopContainerWrapper';
import { motion } from 'framer-motion';

export { AsideMiniPlayer, InnerWrapper };
const MWrapper = motion(AsideBar);
export default {
  Wrapper: AsideBar,
  MWrapper: MWrapper,
  Inner: InnerWrapper,
  Top: TopContainerWrapper,
};
