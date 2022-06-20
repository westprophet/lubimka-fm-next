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
  | 'contact us'
  | 'suggest a way to listen'
  | 'order advertising'
  | 'offer news'
  | 'suggest a new channel'
  | 'review'
  | 'technical error'
  | 'improvements';
