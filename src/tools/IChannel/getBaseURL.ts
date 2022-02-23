import IChannel from '../../interfaces/IChannel';

//Получить адрес для API запроса
export default function getBaseURL(c: IChannel): string | null {
  return c.attributes.stream.baseURL;
}
