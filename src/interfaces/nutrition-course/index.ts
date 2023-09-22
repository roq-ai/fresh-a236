import { GetQueryInterface } from 'interfaces';

export interface NutritionCourseInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface NutritionCourseGetQueryInterface extends GetQueryInterface {
  id?: string;
}
