import { defineStore } from 'pinia';
import orderService from '../services/order.service'; 

const mapCartItem = (raw) => ({
    id: raw.id,
    cartId: raw.cart_id,
    courseId: raw.course_id,
    course: raw.course ? {
        title: raw.course.title,
        price: raw.course.current_price,
        thumbnail: raw.course.thumbnail_url
    } : null
});

const mapOrderHistory = (raw) => ({
    id: raw.id,
    totalAmount: raw.total_amount,
    status: raw.status,
    paymentMethod: raw.payment_method,
    createdAt: raw.created_at,
    items: raw.items || []
});

export const useOrderStore = defineStore('order', {
    state: () => ({
        cart: { items: [] },
        appliedCoupon: null,
        wishlistIds: [],
        orderHistory: [],
        isLoading: false,
        error: null
    }),
    getters: {
        cartTotal(state) {
            const sum = state.cart.items.reduce((total, item) => total + (item.course?.price || 0), 0);
            if (state.appliedCoupon) {
                return sum - (sum * (state.appliedCoupon.discount_percent / 100));
            }
            return sum;
        },
        cartItemCount(state) {
            return state.cart.items.length;
        }
    },
    actions: {
        // --- GIỎ HÀNG ---
        async loadCart() {
            this.isLoading = true;
            try {
                const res = await orderService.getCart();
                if (res.status === 'success') {
                    this.cart.items = (res.data.items || []).map(mapCartItem);
                }
            } catch (err) {
                console.error(err);
            } finally {
                this.isLoading = false;
            }
        },
        async addToCart(courseId) {
            this.isLoading = true;
            try {
                await orderService.addToCart(courseId);
                await this.loadCart(); // Tải lại giỏ hàng
                return true;
            } catch (err) {
                this.error = err.response?.data?.message || 'Lỗi thêm vào giỏ';
                throw err;
            } finally {
                this.isLoading = false;
            }
        },
        async removeFromCart(courseId) {
            try {
                await orderService.removeFromCart(courseId);
                await this.loadCart();
            } catch (err) {
                console.error(err);
            }
        },
        async applyCoupon(code) {
            this.isLoading = true;
            this.error = null;
            try {
                const res = await orderService.applyCoupon(code);
                if (res.status === 'success') {
                    this.appliedCoupon = res.data;
                    return true;
                }
            } catch (err) {
                this.error = err.response?.data?.message || 'Mã giảm giá không hợp lệ';
                return false;
            } finally {
                this.isLoading = false;
            }
        },

        // --- THANH TOÁN ---
        async checkout(courseIds, paymentMethod) {
            this.isLoading = true;
            try {
                const res = await orderService.createOrder(courseIds, paymentMethod);
                if (res.status === 'success') {
                    this.cart.items = []; // Xóa giỏ hàng sau khi mua xong
                    this.appliedCoupon = null;
                    return res.data;
                }
            } catch (err) {
                throw err;
            } finally {
                this.isLoading = false;
            }
        },
        async loadOrderHistory() {
            this.isLoading = true;
            try {
                const res = await orderService.getOrderHistory();
                if (res.status === 'success') {
                    this.orderHistory = res.data.map(mapOrderHistory);
                }
            } catch (err) {
                console.error(err);
            } finally {
                this.isLoading = false;
            }
        }
    }
});