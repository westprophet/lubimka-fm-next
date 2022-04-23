import { isValidITeamMember } from '../../../../../../validations';
import { IGetTeamMembersResponse } from '../types/IGetTeamMembersResponse';

//Проверка ответа запроса IGetTeamMembersResponse
export default function isValidGetTeamMembersResponse(d: IGetTeamMembersResponse): boolean {
  try {
    //Проверяем все сущности
    const isValid = Array.isArray(d.data) && d.data?.every(isValidITeamMember);
    if (!isValid) throw '';
    return true;
  } catch (e) {
    console.error('isValidGetTeamMembersResponse: no-valid:', d);
    return false;
  }
}
