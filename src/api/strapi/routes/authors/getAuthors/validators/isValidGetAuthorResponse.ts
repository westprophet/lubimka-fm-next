import { isValidIAuthor } from '../../../../../../validations';
import { TGetAuthorsResponse } from '../types/IGetAuthorsResponse';

//Проверка ответа запроса
export default function isValidGetAuthorsResponse(d: TGetAuthorsResponse): boolean {
  try {
    //Проверяем все сущности
    const isValid = Array.isArray(d.data) && d.data?.every(isValidIAuthor);
    if (!isValid) throw '';
    return true;
  } catch (e) {
    console.error('isValidGetAuthorsResponse: no-valid:', d);
    return false;
  }
}
