<template>
    <HomePageHeader />

    <div class="min-h-screen bg-[var(--bg-app)] text-gray-200 font-sans relative overflow-hidden pb-20 pt-28">
        <div
            class="absolute top-[5%] left-[-5%] w-[45vw] h-[45vw] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none z-0">
        </div>
        <div
            class="absolute bottom-[10%] right-[-5%] w-[35vw] h-[35vw] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none z-0">
        </div>
        <div
            class="absolute top-[30%] left-[20%] w-[20vw] h-[20vw] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none z-0">
        </div>

        <main class="relative z-10 max-w-7xl mx-auto px-6">

            <CourseHeader :learningCount="learningCourses.length" :completedCount="completedCourses.length" />

            <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

                <div class="lg:col-span-3 space-y-6">
                    <CourseFilter v-model:activeTab="activeTab" v-model:searchQuery="searchQuery"
                        v-model:sortBy="sortBy" :learningCount="learningCourses.length"
                        :completedCount="completedCourses.length" :roadmapCount="mockRoadmapCourses.length" />

                    <CourseGrid :courses="processedCourses" :activeTab="activeTab" :searchQuery="searchQuery"
                        @continue="continueLearning" @copyLink="copyVerifyLink" @clearSearch="searchQuery = ''"
                        @explore="$router.push('/khoa-hoc')" />
                </div>

                <div class="lg:col-span-1 space-y-6 lg:sticky lg:top-28">
                    <CourseSidebar :bookmarks="bookmarks" :notes="notes" @navigate="goToLesson" />
                </div>

            </div>
        </main>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import HomePageHeader from '@/layouts/HomePageHeader.vue'

// Import các components con
import CourseHeader from '@/modules/courses/components/CourseHeader.vue'
import CourseFilter from '@/modules/courses/components/CourseFilter.vue'
import CourseGrid from '@/modules/courses/components/CourseGrid.vue'
import CourseSidebar from '@/modules/courses/components/CourseSidebar.vue'
import CourseRoadmap from '@/modules/courses/components/CourseRoadmap.vue'

const router = useRouter()

// === STATE ===
const activeTab = ref('learning')
const searchQuery = ref('')
const sortBy = ref('recent')

// MOCK DATA
const myCourses = ref([
    {
        id: 1, title: 'Xây dựng hệ thống Backend với NestJS chuyên sâu', thumbnail: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80',
        totalLessons: 45, completedLessons: 12, progress: 26, lastAccessed: 'Vài phút trước', lastAccessedWeight: 3, addedAt: '2026-03-01', status: 'learning'
    },
    {
        id: 3, title: 'Làm chủ Cơ sở dữ liệu quan hệ PostgreSQL tối ưu', thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        totalLessons: 30, completedLessons: 30, progress: 100, lastAccessed: '1 tháng trước', lastAccessedWeight: 1, addedAt: '2021-02-15', status: 'completed', certificateId: 'PG-9982-XYZ', issueDate: '15/05/2026'
    }
])

const bookmarks = ref([
    { id: 1, courseId: 1, lessonId: 104, title: 'Xử lý Custom Exception Filter nâng cao', courseTitle: 'Xây dựng hệ thống Backend với NestJS chuyên sâu' }
])

const notes = ref([
    { id: 1, courseId: 1, lessonId: 102, courseCode: 'NestJS', lessonTitle: 'Dependency Injection hoạt động thế nào?', content: 'Cần nhớ Singleton Scope là mặc định.', updatedAt: '10 phút trước' }
])

// (Tùy chọn) Đổi tên biến nếu bạn vẫn muốn giữ mock data này để dùng sau
const mockRoadmapCourses = ref([
    { id: 4, title: 'Lộ trình học Fullstack Developer', thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80' }
])

// === LOGIC ===
const learningCourses = computed(() => myCourses.value.filter(c => c.status === 'learning'))
const completedCourses = computed(() => myCourses.value.filter(c => c.status === 'completed'))
const processedCourses = computed(() => {
    let list = activeTab.value === 'learning' ? [...learningCourses.value] : [...completedCourses.value]

    if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase()
        list = list.filter(c => c.title.toLowerCase().includes(query))
    }

    list.sort((a, b) => {
        if (sortBy.value === 'recent') return b.lastAccessedWeight - a.lastAccessedWeight
        if (sortBy.value === 'progress') return b.progress - a.progress
        if (sortBy.value === 'newest') return new Date(b.addedAt) - new Date(a.addedAt)
        return 0
    })

    return list
})

// === ACTIONS ===
const continueLearning = (courseId) => router.push(`/phong-hoc/${courseId}`)
const goToLesson = (courseId, lessonId) => router.push(`/phong-hoc/${courseId}/bai-hoc/${lessonId}`)

const copyVerifyLink = async (certId) => {
    const verifyUrl = `${window.location.origin}/verify/${certId}`
    try {
        await navigator.clipboard.writeText(verifyUrl)
        alert('Đã sao chép đường dẫn xác minh chứng chỉ!')
    } catch (err) {
        console.error('Lỗi khi copy link: ', err)
    }
}
</script>