import { isValidIPartner } from '../../../../../../validations';
import { IGetPartnersResponse } from '../types/IGetPartnersResponse';

//Проверка ответа запроса IGetPartnersResponse
export default function isValidGetPartnersResponse(d: IGetPartnersResponse): boolean {
  try {
    //Проверяем все сущности
    const isValid = Array.isArray(d.data) && d.data?.every(isValidIPartner);
    if (!isValid) throw '';
    return true;
  } catch (e) {
    console.error('isValidGetPartnersResponse: no-valid:', d);
    return false;
  }
}
