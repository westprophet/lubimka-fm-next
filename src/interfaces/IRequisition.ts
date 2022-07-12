//Запрос на изменения или добавления
export default interface IRequisition {
  type: TRequisitionType;
  active: boolean;
  email: string;
  name: string;
  phone: string;
  address: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export type TRequisitionType =
  | 'contact us' //свяжитесь со мной
  | 'suggest a way to listen' //хочу что бы добавили трек
  | 'order advertising' //заказ рекламы
  | 'offer news' //Предлагают новость
  | 'suggest a new channel' // Новый канал
  | 'review' //отзыв
  | 'technical error' // Техническая ошибка
  | 'improvements'; // Улучшения
