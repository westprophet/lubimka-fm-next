import { isValidIClub } from '../../../../../../validations';
import { IGetClubsResponse } from '../types/IGetClubsResponse';

//Проверка ответа запроса IGetClubsResponse
export default function isValidGetClubsResponse(d: IGetClubsResponse): boolean {
  try {
    //Проверяем все сущности
    const isValid = Array.isArray(d.data) && d.data?.every(isValidIClub);
    if (!isValid) throw '';
    return true;
  } catch (e) {
    console.error('isValidGetClubsResponse: no-valid:', d);
    return false;
  }
}
