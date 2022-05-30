import StrapiAxios from '../../../global';
import { IAuthor } from 'interfaces/IAuthor';
import isValidGetAuthorResponse from './validators/isValidGetAuthorResponse';
import { TGetAuthorResponse } from './types/IGetAuthorResponse';
import getParamsObject from './utils/getParamsObject';
import { IGetAuthorRequestParams } from './types/IGetAuthorRequestParams';

export default async function getAuthor(p?: IGetAuthorRequestParams): Promise<IGetAuthorsReturn> {
  if (!p?.id) return null;
  try {
    const { data }: { data: TGetAuthorResponse } = await StrapiAxios.get(`/authors/${p.id}/`, {
      params: getParamsObject(p),
    });
    if (isValidGetAuthorResponse(data)) {
      return data.data;
    } else throw '';
  } catch (e) {
    console.error('STRAPI: getAuthor:', e);
    return null;
  }
}
export type IGetAuthorsReturn = IAuthor | null;
