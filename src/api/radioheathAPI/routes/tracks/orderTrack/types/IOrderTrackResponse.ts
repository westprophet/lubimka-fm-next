import TOrderTrackStatusType from './TOrderTrackStatusType';

export default interface IOrderTrackResponse {
  status: TOrderTrackStatusType;
  user_deny_duration: number; //Запрет на заказ трека пользователем (в минутах)
}
