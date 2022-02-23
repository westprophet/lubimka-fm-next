import IChannel from '../../../interfaces/IChannel';
import { LOCAL_KEY, FIELD_KEY } from '../constants';

const setLocalChannel = (c: IChannel): null | boolean => {
  if (typeof window === 'undefined') return null;
  window.localStorage.setItem(c[FIELD_KEY], LOCAL_KEY);
};
export default setLocalChannel;
