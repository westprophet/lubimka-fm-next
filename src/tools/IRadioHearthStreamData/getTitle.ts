import IRadioHearthStreamDataMount from '../../api/radioheathAPI/types/IRadioHearthStreamDataMount';
import IRadioHearthStreamData from '../../api/radioheathAPI/types/IRadioHearthStreamData';
import rTools from '../../api/radioheathAPI/tools';
import TAudioTitle from '../../types/TAudioTitle';
import { splitTrackName } from '../IRadioHearthStreamDataMount';

//
export default function getTitle(d?: IRadioHearthStreamData | null): TAudioTitle | null {
  if (!d) return null;
  const _data: IRadioHearthStreamDataMount | null = rTools.getMount(d); //Получаем более точные данные
  //Разделяем имя и название трека
  return splitTrackName(_data);
}
