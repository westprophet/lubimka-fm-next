import { IDefaultManagerValues } from '../types';

const INITIAL_VALUES: IDefaultManagerValues = {
  header: {
    state: null,
    show: () => {},
    transparent: () => {},
  },
  player: {
    state: null,
    show: () => {},
    transparent: () => {},
    pin: () => {},
  },
};
export default INITIAL_VALUES;
