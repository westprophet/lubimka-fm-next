import HiddenSideTrackList, { ITrackListProps } from './HiddenSideTrackList';
import { motion } from 'framer-motion';

export type { ITrackListProps };

export const MHiddenSideTrackList = motion(HiddenSideTrackList, {
  forwardMotionProps: true,
});
export default HiddenSideTrackList;
