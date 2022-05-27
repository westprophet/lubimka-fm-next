import { isValidIEvent } from '../../../../../../validations';
import { IGetEventResponse } from '../types/IGetEventResponse';

//Проверка ответа запроса IGetEventsResponse
export default function isValidGetEventResponse(d: IGetEventResponse): boolean {
  try {
    //Проверяем все сущности
    const isValid = isValidIEvent(d.data);
    if (!isValid) throw '';
    return true;
  } catch (e) {
    console.error('isValidGetEventsResponse: no-valid:', d);
    return false;
  }
}
