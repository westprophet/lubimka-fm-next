import { isValidIEvent } from '../../../../../../validations';
import { IGetEventsResponse } from '../types/IGetEventsResponse';

//Проверка ответа запроса IGetEventsResponse
export default function isValidGetEventsResponse(d: IGetEventsResponse): boolean {
  try {
    //Проверяем все сущности
    const isValid = Array.isArray(d.data) && d.data?.every(isValidIEvent);
    if (!isValid) throw '';
    return true;
  } catch (e) {
    console.error('isValidGetEventsResponse: no-valid:', d);
    return false;
  }
}
