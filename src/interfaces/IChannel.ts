import IStream from './IStream';

export default interface IChannel {
  order: number;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  stream: IStream;
}
