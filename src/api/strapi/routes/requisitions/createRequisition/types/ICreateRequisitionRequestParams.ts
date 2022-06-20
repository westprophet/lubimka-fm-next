import { TRequisitionType } from 'interfaces/IRequisition';

export interface ICreateRequisitionRequestParams {
  email: string;
  phone?: string;
  name: string;
  address?: string;
  message: string;
  type: TRequisitionType;
}
