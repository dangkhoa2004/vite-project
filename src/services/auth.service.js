import apiClient from './api.service';

const authService = {
  postRegister(userData) {
    return apiClient.post('/auth/register', userData);
  },

  postLogin(credentials) {
    return apiClient.post('/auth/login', credentials);
  },

  postLogout() {
    return apiClient.post('/auth/logout');
  },

  refreshToken() {
    return apiClient.post('/auth/refresh-token');
  }
};

export default authService;