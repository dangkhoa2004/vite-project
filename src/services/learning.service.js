import apiClient from './api.service';

const learningService = {
    getMyLearning() {
        return apiClient.get('/learning/my-courses');
    },

    getCourseSyllabus(courseId) {
        return apiClient.get(`/learning/courses/${courseId}/syllabus`);
    },

    syncVideoProgress(enrollmentId, lessonId, currentSecond, isCompleted) {
        return apiClient.post('/learning/progress', {
            enrollment_id: enrollmentId,
            lesson_id: lessonId,
            last_watched_second: currentSecond,
            is_completed: isCompleted
        });
    },

    addNote(lessonId, content, timestamp) {
        return apiClient.post('/learning/notes', { lesson_id: lessonId, content, video_timestamp: timestamp });
    },

    getNotes(lessonId) {
        return apiClient.get(`/learning/notes?lesson_id=${lessonId}`);
    }
};

export default learningService;