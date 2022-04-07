import IChannel from 'src/interfaces/IChannel';

export default interface IChannelManagerValues {
  current: IChannel | null;
  channels: IChannel[] | null; // Список каналов
  setChannel(c: IChannel): void; //Устанавливаем канал
  prevChannel(): void;
  nextChannel(): void;
  isLoadingChannels: boolean;
}
