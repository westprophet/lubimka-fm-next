import IChannel from '../../../interfaces/IChannel';
import { LOCAL_KEY } from '../constants';
import ls from 'universal-localstorage';

const setLocalChannel = (c: IChannel) => {
  ls.set(c.title, LOCAL_KEY);
};
export default setLocalChannel;
