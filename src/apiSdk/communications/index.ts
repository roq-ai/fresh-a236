import axios from 'axios';
import queryString from 'query-string';
import { CommunicationInterface, CommunicationGetQueryInterface } from 'interfaces/communication';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCommunications = async (
  query?: CommunicationGetQueryInterface,
): Promise<PaginatedInterface<CommunicationInterface>> => {
  const response = await axios.get('/api/communications', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCommunication = async (communication: CommunicationInterface) => {
  const response = await axios.post('/api/communications', communication);
  return response.data;
};

export const updateCommunicationById = async (id: string, communication: CommunicationInterface) => {
  const response = await axios.put(`/api/communications/${id}`, communication);
  return response.data;
};

export const getCommunicationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/communications/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCommunicationById = async (id: string) => {
  const response = await axios.delete(`/api/communications/${id}`);
  return response.data;
};
