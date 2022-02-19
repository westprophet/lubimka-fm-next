import IChannel from '../../../interfaces/IChannel';
import { LOCAL_KEY, FIELD_KEY } from '../constants';
import ls from 'universal-localstorage';

const setLocalChannel = (c: IChannel) => {
  ls.set(c[FIELD_KEY], LOCAL_KEY);
};
export default setLocalChannel;
