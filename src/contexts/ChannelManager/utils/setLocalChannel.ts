import IChannel from '../../../interfaces/IChannel';
import { LOCAL_KEY, FIELD_KEY } from '../constants';

const setLocalChannel = (c: IChannel): null | boolean => {
  if (typeof window === 'undefined') return null;
  window.localStorage.setItem(LOCAL_KEY, c.attributes[FIELD_KEY]);
};
export default setLocalChannel;
