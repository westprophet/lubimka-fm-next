import StrapiAxios from '../../../global';
import { IAuthor } from 'interfaces/IAuthor';
import IStrapiReturn from '../../../types/IStrapiReturn';
import { TGetAuthorsResponse } from './types/IGetAuthorsResponse';
import getParamsObject from './utils/getParamsObject';
import { IGetAuthorsRequestParams } from './types/IGetAuthorsRequestParams';

export default async function getAuthors(p?: IGetAuthorsRequestParams): Promise<IGetAuthorsReturn> {
  try {
    const { data }: { data: TGetAuthorsResponse } = await StrapiAxios.get('/authors', {
      params: getParamsObject(p),
    });
    return {
      data: data.data,
      meta: data.meta,
    };
  } catch (e) {
    console.error('STRAPI: getAuthors:', e);
    return {
      data: null,
      meta: null,
    };
  }
}
export type IGetAuthorsReturn = IStrapiReturn<IAuthor[] | null>;
