import IStream from 'src/interfaces/IStream';

export default function getPort(s: IStream): null | number {
  if (!s) return null;
  return s.port;
}
