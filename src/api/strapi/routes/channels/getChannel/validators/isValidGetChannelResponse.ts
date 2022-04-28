import { isValidIChannel } from '../../../../../../validations';
import { IGetChannelResponse } from '../types/IGetChannelResponse';

//Проверка ответа запроса IGetChannelResponse
export default function isValidGetChannelResponse(d: IGetChannelResponse): boolean {
  try {
    //Проверяем все сущности
    const isValid = Array.isArray(d.data) && d.data?.every(isValidIChannel);
    if (!isValid) throw '';
    return true;
  } catch (e) {
    console.error('isValidGetChannelResponse: no-valid:', d);
    return false;
  }
}
