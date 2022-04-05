import StrapiAxios from '../../../global';
import { IAuthor } from '../../../../../interfaces';
import IStrapiReturn from '../../../types/IStrapiReturn';
import isValidGetAuthorsResponse from './validators/isValidGetAuthorResponse';
import { TGetAuthorsResponse } from './types/IGetAuthorsResponse';

export default async function getAuthors(): Promise<IGetAuthorsReturn> {
  try {
    const { data }: { data: TGetAuthorsResponse } = await StrapiAxios.get('/authors', {
      params: {
        'populate[Socials][populate][icon][populate]': '*',
        'populate[albums]': '*',
        'populate[avatar]': '*',
      },
    });
    if (isValidGetAuthorsResponse(data)) {
      return {
        data: data.data,
        meta: data.meta,
      };
    } else throw '';
  } catch (e) {
    console.error('STRAPI: getAuthors:', e);
    return [];
  }
}
export type IGetAuthorsReturn = IStrapiReturn<IAuthor[]> | [];
