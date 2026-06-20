import apiClient from './api.service';

const commerceService = {
    fetchCategories() {
        return apiClient.get('/categories');
    },

    fetchCourses(params = {}) {
        // params có thể chứa: search, category_id, sort_by, page, limit
        return apiClient.get('/courses', { params });
    },

    fetchCourseById(id) {
        return apiClient.get(`/courses/${id}`);
    },

    fetchCourseReviews(id) {
        return apiClient.get(`/courses/${id}/reviews`);
    }
};

export default commerceService;