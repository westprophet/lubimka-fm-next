import IIcon from './IIcon';

export default interface ISocial {
  id: number;
  title: string; // название
  url: string; //Путь куда ссылается соц сеть
  icon: IIcon; //Иконка
}
