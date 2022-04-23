import { IDefaultManagerValues } from '../types';

const INITIAL_VALUES: IDefaultManagerValues = {
  // @ts-ignore
  header: {
    state: null,
    show: () => {},
    transparent: () => {},
  },
  // @ts-ignore
  player: {
    state: null,
    show: () => {},
    transparent: () => {},
    pin: () => {},
  },
};
export default INITIAL_VALUES;
