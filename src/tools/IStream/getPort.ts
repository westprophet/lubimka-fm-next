import IStream from 'src/interfaces/others/IStream';

export default function getPort(s: IStream): null | number {
  if (!s) return null;
  return Number(s.port);
}
