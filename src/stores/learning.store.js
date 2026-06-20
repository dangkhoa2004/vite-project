import { defineStore } from 'pinia';
import learningService from '../services/learning.service'; 

const mapSyllabus = (chapters) => {
    if (!chapters) return [];
    return chapters.map(chap => ({
        id: chap.id,
        title: chap.title,
        order: chap.order_index,
        lessons: (chap.lessons || []).map(lesson => ({
            id: lesson.id,
            title: lesson.title,
            videoUrl: lesson.video_url,
            duration: lesson.duration_seconds,
            isCompleted: lesson.progress?.is_completed || false,
            lastWatched: lesson.progress?.last_watched_second || 0,
            attachments: lesson.attachments || []
        })).sort((a, b) => a.order_index - b.order_index)
    })).sort((a, b) => a.order - b.order);
};

export const useLearningStore = defineStore('learning', {
    state: () => ({
        myEnrollments: [],
        currentCourseSyllabus: [],
        activeLesson: null,
        isLoading: false,
        error: null
    }),
    getters: {
        totalProgress(state) {
            if (!state.currentCourseSyllabus.length) return 0;
            const totalLessons = state.currentCourseSyllabus.reduce((sum, chap) => sum + chap.lessons.length, 0);
            const completedLessons = state.currentCourseSyllabus.reduce((sum, chap) => 
                sum + chap.lessons.filter(l => l.isCompleted).length, 0);
            return totalLessons === 0 ? 0 : Math.round((completedLessons / totalLessons) * 100);
        }
    },
    actions: {
        async loadMyCourses() {
            this.isLoading = true;
            try {
                const res = await learningService.getMyCourses();
                if (res.status === 'success') {
                    this.myEnrollments = res.data || [];
                }
            } catch (err) {
                console.error(err);
            } finally {
                this.isLoading = false;
            }
        },

        async loadCourseContent(courseId) {
            this.isLoading = true;
            this.error = null;
            try {
                const res = await learningService.getCourseContent(courseId);
                if (res.status === 'success') {
                    this.currentCourseSyllabus = mapSyllabus(res.data);
                }
            } catch (err) {
                this.error = 'Không thể tải nội dung khóa học.';
            } finally {
                this.isLoading = false;
            }
        },

        setActiveLesson(lesson) {
            this.activeLesson = lesson;
        },

        // Đồng bộ lưu vị trí video lên Backend
        async trackProgress(courseId, lessonId, seconds) {
            try {
                await learningService.trackVideoProgress(courseId, lessonId, seconds);
            } catch (err) {
                console.warn("Lưu tiến độ thất bại", err);
            }
        },

        // Đánh dấu hoàn thành bài học
        async markLessonCompleted(lessonId) {
            try {
                await learningService.completeLesson(lessonId);
                // Cập nhật lại UI local
                if (this.activeLesson && this.activeLesson.id === lessonId) {
                    this.activeLesson.isCompleted = true;
                }
            } catch (err) {
                console.error(err);
            }
        }
    }
});