import { isValidIClub } from '../../../../../../validations';
import { IGetClubResponse } from '../types/IGetClubResponse';

//Проверка ответа запроса IGetClubsResponse
export default function isValidGetClubResponse(d: IGetClubResponse): boolean {
  try {
    //Проверяем все сущности
    const isValid = isValidIClub(d.data);
    if (!isValid) throw '';
    return true;
  } catch (e) {
    console.error('isValidGetClubsResponse: no-valid:', d);
    return false;
  }
}
