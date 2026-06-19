import apiClient from './api.service';

const commerceService = {
    fetchCourses(params = {}) {
        return apiClient.get('/courses', { params });
    },

    fetchCourseById(id) {
        return apiClient.get(`/courses/${id}`);
    }
};

export default commerceService;