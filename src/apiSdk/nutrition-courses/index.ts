import axios from 'axios';
import queryString from 'query-string';
import { NutritionCourseInterface, NutritionCourseGetQueryInterface } from 'interfaces/nutrition-course';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getNutritionCourses = async (
  query?: NutritionCourseGetQueryInterface,
): Promise<PaginatedInterface<NutritionCourseInterface>> => {
  const response = await axios.get('/api/nutrition-courses', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createNutritionCourse = async (nutritionCourse: NutritionCourseInterface) => {
  const response = await axios.post('/api/nutrition-courses', nutritionCourse);
  return response.data;
};

export const updateNutritionCourseById = async (id: string, nutritionCourse: NutritionCourseInterface) => {
  const response = await axios.put(`/api/nutrition-courses/${id}`, nutritionCourse);
  return response.data;
};

export const getNutritionCourseById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/nutrition-courses/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteNutritionCourseById = async (id: string) => {
  const response = await axios.delete(`/api/nutrition-courses/${id}`);
  return response.data;
};
