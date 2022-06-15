import IChannel from 'src/interfaces/IChannel';

export default interface IChannelManagerValues {
  current: IChannel | null;
  channels: IChannel[] | null; // Список каналов
  setChannel(c: IChannel): void; //Устанавливаем канал
  getNext(): IChannel;
  getPrev(): IChannel;
  setPrevChannel(): IChannel | undefined;
  setNextChannel(): IChannel | undefined;
  clearDataFromLocalStorage(): any;
  isLoading: boolean;
  isError: boolean;
}
