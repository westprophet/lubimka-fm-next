import IChannel from '../../../interfaces/IChannel';
import { FIELD_KEY, LOCAL_KEY } from '../constants';

const setLocalChannel = (c: IChannel) => {
  if (typeof window === 'undefined') return null;
  window.localStorage.setItem(LOCAL_KEY, c.attributes[FIELD_KEY]);
};
export default setLocalChannel;
