import IRadioHearthStreamData from '../types/IRadioHearthStreamData';
import IRadioHearthStreamDataMount from '../types/IRadioHearthStreamDataMount';
import { RADIO_STREAM_MOUNT_KEY } from '../constants';

//Получение данных из массива
export default function getMount(
  d?: IRadioHearthStreamData | null
): null | IRadioHearthStreamDataMount {
  if (!d) return null;
  return d.mounts[RADIO_STREAM_MOUNT_KEY]; //Получаем конкретный пункт данных
}
