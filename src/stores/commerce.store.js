// src/store/commerce.store.js
import { defineStore } from 'pinia';
import commerceService from '../services/commerce.service';

// ==========================================
// DATA MAPPER (Private Helper)
// ==========================================
const mapCourseData = (course) => {
    if (!course) return null;
    
    return {
        id: course.id,
        title: course.title,
        description: course.description || 'Mô tả chi tiết đang được cập nhật...',
        category: course.category_name || `Danh mục ${course.category_id}`,
        level: course.level,
        price: course.current_price,
        originalPrice: course.original_price, 
        lessons: course.total_lesson || 0,
        duration: course.total_duration || 0,
        students: course.student_count || 0,
        rating: course.avg_rating || 0,
        reviews: course.review_count || 0,
        thumbnail: course.thumbnail_url || 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=600&q=80',
        badges: course.is_free ? ['Miễn phí'] : (course.course_type === 'recorded' ? ['Video'] : []),
        tools: course.tags ? course.tags.map(t => t.name) : [],
        whatYouWillLearn: (() => {
            try {
                if (!course.what_will_you_learn) return [];
                if (typeof course.what_will_you_learn === 'string') {
                    return JSON.parse(course.what_will_you_learn);
                }
                return course.what_will_you_learn;
            } catch (error) {
                console.warn(`Lỗi parse what_will_you_learn ở course ${course.id}:`, error);
                return [];
            }
        })(),
        instructor: {
            name: course.instructor_name || `Giảng viên ${course.teacher_id}`,
            avatar: course.instructor_avatar || `https://i.pravatar.cc/150?u=${course.teacher_id}`
        },
        status: course.status,
        createdAt: course.created_at
    };
};

// ==========================================
// PINIA STORE
// ==========================================
export const useCommerceStore = defineStore('commerce', {
    // 1. STATE: Nơi lưu trữ dữ liệu
    state: () => ({
        courses: [],        // Danh sách khóa học
        courseDetail: null, // Chi tiết 1 khóa học
        isLoading: false,   // Trạng thái loading để show UI spinner
        error: null         // Lưu lỗi nếu có
    }),

    // 2. GETTERS: Lấy dữ liệu phái sinh (nếu cần)
    getters: {
        freeCourses: (state) => state.courses.filter(course => course.price === 0),
    },

    // 3. ACTIONS: Các hàm tương tác với Backend và cập nhật State
    actions: {
        async loadCourses(params = {}) {
            this.isLoading = true;
            this.error = null;
            try {
                // Đổi tên biến thành res cho chuẩn mực
                const res = await commerceService.fetchCourses(params);
                
                // Kiểm tra status và truy cập vào res.data (chứa mảng khóa học)
                if (res.status === 'success') {
                    const rawData = res.data || [];
                    this.courses = rawData.map(course => mapCourseData(course));
                }
            } catch (err) {
                this.error = 'Không thể tải danh sách khóa học.';
                console.error(err);
            } finally {
                this.isLoading = false;
            }
        },

        async loadCourseDetail(id) {
            this.isLoading = true;
            this.error = null;
            this.courseDetail = null; 
            try {
                const res = await commerceService.fetchCourseById(id);
                
                // Tương tự, bóc lấy res.data
                if (res.status === 'success') {
                    this.courseDetail = mapCourseData(res.data);
                }
            } catch (err) {
                this.error = 'Không thể tải chi tiết khóa học.';
                console.error(err);
            } finally {
                this.isLoading = false;
            }
        }
    }
});