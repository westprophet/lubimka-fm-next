import IMeterSettings from './IMeterSettings';

export default interface ISpectrumSetting {
  width: number; //Ширина канваса
  height: number; //Высота канваса
  metersCount: number; // Количество колонок
  meterSetting: IMeterSettings; //Настройки каждой колонки
}
