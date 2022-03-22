//Узнаем размер экрана моб версия или нет
export default function useIsMobile(): boolean {
  try {
    return window && window.innerWidth < 576;
  } catch (e) {
    return false;
  }
}
