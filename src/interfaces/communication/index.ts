import { GetQueryInterface } from 'interfaces';

export interface CommunicationInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface CommunicationGetQueryInterface extends GetQueryInterface {
  id?: string;
}
