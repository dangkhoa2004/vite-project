import apiClient from './api.service';

const orderService = {
    getCart() {
        return apiClient.get('/cart');
    },
    addToCart(courseId) {
        return apiClient.post('/cart/add', { course_id: courseId });
    },
    removeFromCart(courseId) {
        return apiClient.delete(`/cart/remove/${courseId}`);
    },
    applyCoupon(code) {
        return apiClient.post('/cart/apply-coupon', { code });
    },
    createOrder(courseIds, paymentMethod) {
        return apiClient.post('/orders', { 
            course_ids: courseIds, 
            payment_method: paymentMethod 
        });
    },
    processPayment(orderId) {
        return apiClient.post('/payments/process', { order_id: orderId });
    },
    getOrderHistory() {
        return apiClient.get('/orders/history');
    },
    getWishlist() {
        return apiClient.get('/wishlist');
    },
    toggleWishlist(courseId) {
        return apiClient.post('/wishlist/toggle', { course_id: courseId });
    }
};

export default orderService;