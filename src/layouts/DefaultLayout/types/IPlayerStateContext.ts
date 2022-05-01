export default interface IPlayerStateContext {
  isDisable: boolean; //Отключаем плеер
  isShow: boolean; //Скрываем плеер но не отключаем
  isTransparent: boolean; // Прозранчный
  isPinned: boolean; //Закреплен или компактный вид
  isOpenChannelMenu: boolean; // открытое меню с каналами или нет
}
