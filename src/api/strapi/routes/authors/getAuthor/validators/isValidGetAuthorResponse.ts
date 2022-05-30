import { isValidIAuthor } from '../../../../../../validations';
import { TGetAuthorResponse } from '../types/IGetAuthorResponse';

//Проверка ответа запроса
export default function isValidGetAuthorsResponse(d: TGetAuthorResponse): boolean {
  try {
    //Проверяем все сущности
    const isValid = isValidIAuthor(d.data);
    if (!isValid) throw '';
    return true;
  } catch (e) {
    console.error('isValidGetAuthorResponse: no-valid:', d);
    return false;
  }
}
