import { TGetCompaniesResponse } from '../types/IGetCompaniesResponse';
import isValidICompany from '../../../../../../validations/isValidICompany';

//Проверка ответа запроса
export default function isValidGetCompaniesResponse(d: TGetCompaniesResponse): boolean {
  try {
    //Проверяем все сущности
    const isValid =
      Array.isArray(d.data) && d.data?.every((el: any) => isValidICompany(el.attributes));
    if (!isValid) throw '';
    return true;
  } catch (e) {
    console.error('isValidGetCompaniesResponse: no-valid:', d);
    return false;
  }
}
