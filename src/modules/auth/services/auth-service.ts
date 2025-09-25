import { apiClient } from '@/shared/services';

export const authService = {
  login: (email, password) => {
    return apiClient.post('/auth/login', { email, password });
  },
  logout: () => {
    return apiClient.post('/auth/logout');
  },
};
