import apiClient from './api.service';

const orderService = {
    getWishlist() {
        return apiClient.get('/wishlist');
    },

    toggleWishlist(courseId) {
        return apiClient.post('/wishlist/toggle', { course_id: courseId });
    },

    createCheckoutSession(courseIds, paymentMethod) {
        return apiClient.post('/orders/checkout', { course_ids: courseIds, payment_method: paymentMethod });
    },

    getOrderHistory() {
        return apiClient.get('/orders/history');
    }
};

export default orderService;