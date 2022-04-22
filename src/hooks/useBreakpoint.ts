import { useMedia } from 'react-media';

import b from '../scss/breakpoints/_export.module.scss';
import TBreakpoints from '../types/TBreakpoints';

const GLOBAL_MEDIA_QUERIES = {
  xs: `(min-width: ${b.xs}px)`,
  sm: `(min-width: ${b.sm}px)`,
  md: `(min-width: ${b.md}px)`,
  lg: `(min-width: ${b.lg}px)`,
  xl: `(min-width: ${b.xl})px`,
  xxl: `(min-width: ${b.xxl})px`,
  xxxl: `(min-width: ${b.xxxl})px`,
};

export default function useBreakpoint(): TBreakpoints<boolean> {
  return useMedia({ queries: GLOBAL_MEDIA_QUERIES });
}
