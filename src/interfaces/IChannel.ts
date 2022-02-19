import IStream from './IStream';

export default interface IChannel {
  id: number;
  order: number;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  stream: IStream;
}
