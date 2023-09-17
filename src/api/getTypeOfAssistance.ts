import axios from 'axios';
import { API_URL } from '@/constants';

export const getTypeOfAssistance = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/projects/title`);
    return response.data;
  } catch (error) {
    console.error('Error fetching assistance list:', error);
    return [];
  }
};
