import { defineStore } from 'pinia';
import authService from '../services/auth.service';
import router from '@/router';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('access_token') || null,
        isAuthenticated: !!localStorage.getItem('access_token'),
        isLoading: false,
        error: null
    }),
    actions: {
        async login(credentials) {
            this.isLoading = true;
            this.error = null;
            try {
                const res = await authService.postLogin(credentials);
                if (res.status === 'success') {
                    this.token = res.data.token;
                    this.isAuthenticated = true;
                    localStorage.setItem('access_token', res.data.token);
                    return true;
                }
            } catch (err) {
                this.error = err.response?.data?.message || 'Lỗi đăng nhập';
                return false;
            } finally {
                this.isLoading = false;
            }
        },
        async register(userData) {
            this.isLoading = true;
            this.error = null;
            try {
                const res = await authService.postRegister(userData);
                return res.status === 'success';
            } catch (err) {
                this.error = err.response?.data?.message || 'Lỗi đăng ký';
                return false;
            } finally {
                this.isLoading = false;
            }
        },
        async logout() {
            try {
                // Gọi API backend để clear session/token (nếu có lưu ở backend)
                await authService.postLogout();
            } catch (e) {
                console.warn('Lỗi đăng xuất từ server, vẫn tiếp tục xóa token ở local');
            }
            this.token = null;
            this.isAuthenticated = false;
            localStorage.removeItem('access_token');
            router.push('/dang-nhap');
        }
    }
});