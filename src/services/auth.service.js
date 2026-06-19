import apiClient from './api.service';

const authService = {
  postRegister(userData) {
    return apiClient.post('/register', userData);
  },

  postLogin(credentials) {
    return apiClient.post('/login', credentials);
  }
};

export default authService;