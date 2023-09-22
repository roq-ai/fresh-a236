import axios from 'axios';
import queryString from 'query-string';
import { DietaryGuidanceInterface, DietaryGuidanceGetQueryInterface } from 'interfaces/dietary-guidance';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDietaryGuidances = async (
  query?: DietaryGuidanceGetQueryInterface,
): Promise<PaginatedInterface<DietaryGuidanceInterface>> => {
  const response = await axios.get('/api/dietary-guidances', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDietaryGuidance = async (dietaryGuidance: DietaryGuidanceInterface) => {
  const response = await axios.post('/api/dietary-guidances', dietaryGuidance);
  return response.data;
};

export const updateDietaryGuidanceById = async (id: string, dietaryGuidance: DietaryGuidanceInterface) => {
  const response = await axios.put(`/api/dietary-guidances/${id}`, dietaryGuidance);
  return response.data;
};

export const getDietaryGuidanceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/dietary-guidances/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDietaryGuidanceById = async (id: string) => {
  const response = await axios.delete(`/api/dietary-guidances/${id}`);
  return response.data;
};
