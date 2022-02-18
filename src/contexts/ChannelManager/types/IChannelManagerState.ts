import IChannel from 'src/interfaces/IChannel';

export default interface IChannelManagerValues {
  current: IChannel | null;
  channels: IChannel[] | null; // Список каналов
  setChannel(c: IChannel): void; //Устанавливаем канал
  // fetchChannels(): void; //Получаем и устанавливаем каналы из внешних источников
}
