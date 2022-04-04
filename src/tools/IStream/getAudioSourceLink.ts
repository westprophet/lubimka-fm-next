import IStream from 'src/interfaces/others/IStream';

//Получаем ссылку на поток
export default function getAudioSourceLink(s: IStream): null | string {
  if (!s) return null;
  return `${s.baseURL}:${s.port}/${s.code}`;
}
