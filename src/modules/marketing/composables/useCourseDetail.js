import { computed, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCommerceStore } from '@/stores/commerce.store';

export function useCourseDetail() {
    const route = useRoute();
    const commerceStore = useCommerceStore();
    
    // Lấy các state từ store
    const { courseDetail, isLoading, error } = storeToRefs(commerceStore);

    // Bắt ID khóa học trên thanh URL
    const courseId = computed(() => route.params.id);

    // Hàm tải dữ liệu
    const loadDetail = async () => {
        if (courseId.value) {
            await commerceStore.loadCourseDetail(courseId.value);
        }
    };

    // Vòng đời Component: Gọi dữ liệu khi mới vào trang và khi URL thay đổi
    onMounted(() => {
        loadDetail();
    });

    watch(courseId, () => {
        loadDetail();
    }, { immediate: true });

    // ==========================================
    // DATA MAPPERS CHO GIAO DIỆN COMPONENT
    // ==========================================

    // 1. Dữ liệu Giảng viên
    const instructor = computed(() => {
        if (!courseDetail.value) return null;
        return {
            ...courseDetail.value.instructor,
            rating: courseDetail.value.rating || '5.0',
            reviews: courseDetail.value.reviews || '0',
            students: courseDetail.value.students || '0',
            coursesCount: 1 
        };
    });

    // 2. Dữ liệu Khóa học chung (Mô tả, Giá tiền hiển thị)
    const courseInfo = computed(() => {
        if (!courseDetail.value) return null;

        // Chuyển đổi số tiền thành chuỗi định dạng (Khắc phục lỗi prop type String)
        const formattedPrice = courseDetail.value.price === 0 
            ? 'Miễn phí' 
            : new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(courseDetail.value.price);

        // Chuyển đổi giây thành chuỗi "X giờ Y phút"
        const hours = Math.floor(courseDetail.value.duration / 3600);
        const mins = Math.floor((courseDetail.value.duration % 3600) / 60);
        const formattedDuration = hours > 0 ? `${hours} giờ ${mins} phút` : `${mins} phút`;

        return {
            title: courseDetail.value.title,
            description: courseDetail.value.description,
            price: formattedPrice,
            thumbnail: courseDetail.value.thumbnail,
            whatYouWillLearn: courseDetail.value.whatYouWillLearn || [],
            totalLessons: courseDetail.value.lessons,
            totalDuration: formattedDuration
        };
    });

    // 3. Danh sách Video Bài giảng (Playlist Sidebar)
    const playlist = computed(() => {
        if (!courseDetail.value || !courseDetail.value.chapters) return [];
        
        let list = [];
        courseDetail.value.chapters.forEach(chap => {
            if (chap.lessons && chap.lessons.length > 0) {
                chap.lessons.forEach(lesson => {
                    // Chuyển đổi giây của từng video thành MM:SS
                    const min = Math.floor(lesson.duration_seconds / 60);
                    const sec = lesson.duration_seconds % 60;
                    const formattedTime = `${min}:${sec.toString().padStart(2, '0')}`;

                    list.push({
                        title: lesson.title,
                        duration: formattedTime,
                        thumb: courseDetail.value.thumbnail, // Dùng ảnh khóa học làm ảnh đại diện video
                        active: list.length === 0 // Tự động làm sáng bài đầu tiên
                    });
                });
            }
        });
        
        // Trả về mock rỗng nếu khóa học chưa tạo video nào (tránh lỗi UI)
        if (list.length === 0) {
            return [{ title: 'Đang cập nhật bài giảng...', duration: '--:--', thumb: courseDetail.value.thumbnail, active: true }];
        }
        return list;
    });

    // 4. Khóa học tương tự (Có thể gọi API bổ sung sau, hiện tại để rỗng)
    const similarCourses = computed(() => []);

    return {
        courseDetail,
        courseInfo,
        isLoading,
        error,
        instructor,
        playlist,
        similarCourses,
        loadDetail
    };
}