import { GetQueryInterface } from 'interfaces';

export interface DietaryGuidanceInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface DietaryGuidanceGetQueryInterface extends GetQueryInterface {
  id?: string;
}
