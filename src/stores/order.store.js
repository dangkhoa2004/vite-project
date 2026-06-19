import { defineStore } from 'pinia';
import orderService from '../services/order.service'; // Chú ý: import default

// ==========================================
// DATA MAPPER (Private Helper)
// ==========================================
const mapWishlistItem = (raw) => raw.course_id; // Chỉ map lấy ID

const mapOrderHistory = (raw) => ({
    id: raw.id,
    totalAmount: raw.total_amount,
    status: raw.status,
    paymentMethod: raw.payment_method,
    createdAt: raw.created_at,
    items: raw.items || []
});

// ==========================================
// PINIA STORE
// ==========================================
export const useOrderStore = defineStore('order', {
    state: () => ({
        wishlistIds: [],
        orderHistory: [],
        isLoading: false,
        error: null
    }),
    actions: {
        async loadWishlist() {
            this.isLoading = true;
            this.error = null;
            try {
                const res = await orderService.getWishlist();
                if (res.status === 'success') {
                    this.wishlistIds = res.data.map(mapWishlistItem); 
                }
            } catch (err) {
                this.error = 'Không thể tải danh sách yêu thích.';
                console.error(err);
            } finally {
                this.isLoading = false;
            }
        },

        async loadOrderHistory() {
            this.isLoading = true;
            this.error = null;
            try {
                const res = await orderService.getOrderHistory();
                if (res.status === 'success') {
                    this.orderHistory = res.data.map(mapOrderHistory);
                }
            } catch (err) {
                this.error = 'Không thể tải lịch sử mua hàng.';
                console.error(err);
            } finally {
                this.isLoading = false;
            }
        },

        async toggleFavorite(courseId) {
            // Optimistic UI Update
            const index = this.wishlistIds.indexOf(courseId);
            if (index > -1) {
                this.wishlistIds.splice(index, 1);
            } else {
                this.wishlistIds.push(courseId);
            }
            
            this.error = null;
            try {
                await orderService.toggleWishlist(courseId);
            } catch (err) {
                // Rollback nếu API lỗi
                await this.loadWishlist(); 
                this.error = 'Lỗi lưu vào danh sách yêu thích.';
                console.error(err);
            }
        }
    }
});