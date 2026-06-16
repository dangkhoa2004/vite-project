<!-- MentorDetail.vue --><!-- MentorDetail.vue -->
<template>
    <HomePageHeader />

    <div class="min-h-screen bg-[var(--bg-app)] text-gray-200 font-sans relative overflow-hidden pb-20 pt-24">

        <!-- Background Glows -->
        <div
            class="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none z-0">
        </div>
        <div
            class="absolute bottom-[20%] right-[-5%] w-[35vw] h-[35vw] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0">
        </div>

        <main class="relative z-10 max-w-7xl mx-auto px-6">

            <!-- Cover Banner -->
            <div
                class="w-full h-48 md:h-64 rounded-[24px] overflow-hidden relative border border-[var(--border-color)] shadow-lg mt-4">
                <img :src="mentor.cover" alt="Cover" class="w-full h-full object-cover opacity-60" />
                <div class="absolute inset-0 bg-gradient-to-t from-[var(--bg-app)] via-[var(--bg-app)]/50 to-transparent"></div>
            </div>

            <!-- Main Layout Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 items-start -mt-20 md:-mt-24 relative z-20">

                <!-- Left Sidebar: Profile Info -->
                <aside class="space-y-6">
                    <!-- Profile Card -->
                    <div
                        class="bg-[var(--bg-card)]/80 backdrop-blur-xl rounded-[24px] border border-[var(--border-color)] p-6 flex flex-col items-center text-center shadow-[0_15px_40px_rgba(0,0,0,0.5)] relative overflow-hidden">

                        <!-- Avatar -->
                        <div
                            class="w-32 h-32 rounded-full p-1.5 bg-gradient-to-br from-blue-500 to-purple-500 mb-4 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                            <img :src="mentor.avatar" alt="Avatar"
                                class="w-full h-full rounded-full object-cover border-4 border-[var(--bg-card)]" />
                        </div>

                        <!-- Name & Title -->
                        <h1 class="text-2xl font-extrabold text-[var(--text-primary)] mb-1 flex items-center gap-2">
                            {{ mentor.name }}
                            <i class="fa-solid fa-circle-check text-blue-500 text-[14px]" title="Đã xác minh"></i>
                        </h1>
                        <p class="text-[13px] text-blue-400 font-semibold mb-5">{{ mentor.title }}</p>

                        <!-- Quick Stats -->
                        <div class="flex items-center justify-center gap-6 w-full border-y border-[var(--border-color)] py-4 mb-5">
                            <div class="flex flex-col items-center">
                                <span class="text-lg font-bold text-[var(--text-primary)]">{{
                                    formatNumber(mentor.totalStudents)
                                }}</span>
                                <span class="text-[10px] text-gray-500 uppercase tracking-wider">Học viên</span>
                            </div>
                            <div class="w-px h-8 bg-white/10"></div>
                            <div class="flex flex-col items-center">
                                <div class="flex items-center gap-1 text-yellow-500">
                                    <span class="text-lg font-bold">{{ mentor.rating }}</span>
                                    <i class="fa-solid fa-star text-[12px]"></i>
                                </div>
                                <span class="text-[10px] text-gray-500 uppercase tracking-wider">{{ mentor.totalReviews
                                }} Đánh giá</span>
                            </div>
                        </div>

                        <!-- Social Links -->
                        <div class="flex gap-3 mb-6">
                            <a v-for="social in mentor.socials" :key="social.platform" :href="social.link"
                                target="_blank"
                                class="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all">
                                <i :class="social.icon"></i>
                            </a>
                        </div>

                        <!-- Actions -->
                        <div class="w-full space-y-3">
                            <button
                                class="w-full py-3 bg-blue-600 hover:bg-blue-500 text-[var(--text-primary)] text-[13px] font-bold rounded-xl shadow-[0_4px_15px_rgba(37,99,235,0.3)] transition-all flex items-center justify-center gap-2">
                                <i class="fa-solid fa-plus text-[12px]"></i> Theo dõi giảng viên
                            </button>
                            <button
                                class="w-full py-3 bg-white/5 hover:bg-white/10 border border-[var(--border-color)] text-[var(--text-primary)] text-[13px] font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                                <i class="fa-regular fa-calendar-check text-[12px]"></i> Đặt lịch Mentoring 1:1
                            </button>
                        </div>
                    </div>

                    <!-- Skills & Tech Stack -->
                    <div class="bg-[var(--bg-card)]/60 backdrop-blur-xl rounded-[24px] border border-[var(--border-color)] p-6">
                        <h3
                            class="text-[13px] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-4 border-b border-[var(--border-color)] pb-3">
                            Kỹ năng chuyên môn</h3>
                        <div class="flex flex-wrap gap-2">
                            <span v-for="skill in mentor.skills" :key="skill"
                                class="px-3 py-1.5 bg-black/30 border border-[var(--border-color)] rounded-lg text-[11px] text-gray-300 font-medium hover:border-blue-500/50 hover:text-[var(--text-primary)] transition-colors cursor-default">
                                {{ skill }}
                            </span>
                        </div>
                    </div>
                </aside>

                <!-- Right Content: Tabs -->
                <div class="space-y-6 md:mt-24 lg:mt-0">

                    <!-- Tab Navigation -->
                    <div
                        class="flex bg-[var(--bg-card)]/80 p-1.5 rounded-2xl border border-[var(--border-color)] shadow-inner w-full overflow-x-auto custom-scrollbar backdrop-blur-xl">
                        <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id"
                            :class="['flex-1 px-6 py-3 text-[13px] font-bold rounded-xl transition-all whitespace-nowrap flex items-center justify-center gap-2',
                                activeTab === tab.id ? 'bg-white/10 text-[var(--text-primary)] shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5']">
                            <i :class="tab.icon"></i> {{ tab.name }}
                        </button>
                    </div>

                    <!-- Tab Content: Giới thiệu -->
                    <Transition name="fade" mode="out-in">
                        <div v-if="activeTab === 'about'" class="space-y-6">
                            <!-- About Bio -->
                            <div
                                class="bg-[var(--bg-card)]/60 backdrop-blur-xl rounded-[24px] border border-[var(--border-color)] p-6 md:p-8">
                                <h2 class="text-lg font-bold text-[var(--text-primary)] mb-4">Về giảng viên</h2>
                                <div class="text-[14px] text-gray-300 leading-relaxed space-y-4 font-light"
                                    v-html="mentor.bio"></div>
                            </div>

                            <!-- Experience Timeline -->
                            <div
                                class="bg-[var(--bg-card)]/60 backdrop-blur-xl rounded-[24px] border border-[var(--border-color)] p-6 md:p-8">
                                <h2 class="text-lg font-bold text-[var(--text-primary)] mb-6">Kinh nghiệm làm việc</h2>
                                <div
                                    class="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                                    <div v-for="(exp, index) in mentor.experiences" :key="index"
                                        class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                                        <div
                                            class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--bg-app)] bg-[var(--bg-card)] group-hover:bg-blue-600 group-hover:border-blue-500/30 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors z-10 ml-0 md:ml-0">
                                            <i class="fa-solid fa-briefcase text-[12px]"></i>
                                        </div>

                                        <div
                                            class="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-black/20 p-5 rounded-2xl border border-[var(--border-color)] hover:border-[var(--border-color)] transition-colors ml-4 md:ml-0">
                                            <div class="flex items-center justify-between mb-1">
                                                <h3 class="font-bold text-[var(--text-primary)] text-[14px]">{{ exp.role
                                                }}</h3>
                                                <span
                                                    class="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">{{
                                                        exp.year }}</span>
                                            </div>
                                            <p class="text-[12px] text-[var(--text-secondary)] mb-2 font-medium">{{
                                                exp.company }}</p>
                                            <p class="text-[12px] text-gray-500 line-clamp-2 leading-relaxed">{{
                                                exp.description }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Tab Content: Khóa học -->
                        <div v-else-if="activeTab === 'courses'" class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <!-- Course Card (Sử dụng cấu trúc tương tự ListCommerceCourses) -->
                            <div v-for="course in mentorCourses" :key="course.id"
                                class="group flex flex-col bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[20px] border border-[var(--border-color)] overflow-hidden hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgba(59,130,246,0.08)] transition-all duration-300 p-3 gap-4">
                                <div
                                    class="w-full h-40 rounded-xl overflow-hidden relative border border-[var(--border-color)] bg-[var(--bg-app)] transform-gpu">
                                    <img :src="course.thumbnail"
                                        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                                    <span
                                        class="absolute top-2 left-2 z-20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[var(--text-primary)] bg-blue-600 rounded shadow-sm">{{
                                            course.category }}</span>
                                </div>
                                <div class="flex-1 flex flex-col justify-between py-1">
                                    <div>
                                        <div class="flex items-center justify-between mb-2">
                                            <div class="flex items-center text-yellow-500 text-[11px] gap-0.5">
                                                <i class="fa-solid fa-star"></i>
                                                <span class="text-gray-200 font-bold ml-1">{{ course.rating }}</span>
                                            </div>
                                            <span
                                                class="text-[10px] font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">{{
                                                    course.level }}</span>
                                        </div>
                                        <h3
                                            class="text-[14px] font-bold text-[var(--text-primary)] mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                                            {{ course.title }}</h3>
                                    </div>
                                    <div class="flex justify-between items-center pt-3 border-t border-[var(--border-color)] mt-auto">
                                        <span
                                            :class="['text-[14px] font-extrabold', course.price === 0 ? 'text-emerald-400' : 'text-[var(--text-primary)]']">
                                            {{ course.price === 0 ? 'Miễn phí' : formatPrice(course.price) }}
                                        </span>
                                        <button
                                            class="px-4 py-2 bg-white/5 hover:bg-blue-600 text-[var(--text-primary)] text-[11px] font-bold rounded-lg transition-colors">Xem
                                            chi tiết</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Tab Content: Đánh giá -->
                        <div v-else-if="activeTab === 'reviews'" class="space-y-4">
                            <div
                                class="flex items-center justify-between bg-[var(--bg-card)]/60 p-5 rounded-[20px] border border-[var(--border-color)] mb-6">
                                <div class="flex items-center gap-4">
                                    <div class="text-4xl font-extrabold text-[var(--text-primary)]">{{ mentor.rating }}
                                    </div>
                                    <div class="flex flex-col">
                                        <div class="flex text-yellow-500 text-[13px] mb-1">
                                            <i v-for="i in 5" :key="i" class="fa-solid fa-star"></i>
                                        </div>
                                        <span class="text-[11px] text-[var(--text-secondary)]">Trung bình từ {{
                                            mentor.totalReviews }}
                                            đánh giá</span>
                                    </div>
                                </div>
                            </div>

                            <div v-for="review in reviews" :key="review.id"
                                class="bg-[var(--bg-card)]/40 p-5 rounded-[20px] border border-[var(--border-color)] flex gap-4">
                                <img :src="review.userAvatar"
                                    class="w-10 h-10 rounded-full object-cover shrink-0 border border-[var(--border-color)]" />
                                <div>
                                    <div class="flex items-center justify-between mb-1">
                                        <h4 class="text-[13px] font-bold text-[var(--text-primary)]">{{ review.userName
                                        }}</h4>
                                        <span class="text-[10px] text-gray-500">{{ review.date }}</span>
                                    </div>
                                    <div class="flex text-yellow-500 text-[9px] gap-0.5 mb-2">
                                        <i v-for="i in 5" :key="i"
                                            :class="i <= review.rating ? 'fa-solid fa-star' : 'fa-regular fa-star'"></i>
                                    </div>
                                    <p class="text-[12.5px] text-gray-300 leading-relaxed">{{ review.content }}</p>
                                    <p
                                        class="text-[10px] text-blue-400 mt-2 bg-blue-500/10 inline-block px-2 py-1 rounded">
                                        Khóa học: {{ review.courseName }}</p>
                                </div>
                            </div>
                        </div>
                    </Transition>

                </div>
            </div>
        </main>
    </div>
    <HomePageFooter />
</template>

<script setup>
import { ref } from 'vue'
import HomePageHeader from '@/layouts/HomePageHeader.vue'
import HomePageFooter from '@/layouts/HomePageFooter.vue'

// Quản lý Tab
const activeTab = ref('about')
const tabs = [
    { id: 'about', name: 'Giới thiệu', icon: 'fa-regular fa-id-badge' },
    { id: 'courses', name: 'Khóa học (4)', icon: 'fa-solid fa-layer-group' },
    { id: 'reviews', name: 'Đánh giá', icon: 'fa-regular fa-comments' }
]

// Mock Data: Mentor Info
const mentor = ref({
    name: 'Thanh Sơn',
    title: 'Senior Fullstack Developer & Solutions Architect',
    avatar: 'https://i.pravatar.cc/150?u=1',
    cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    totalStudents: 15420,
    rating: 4.9,
    totalReviews: 3240,
    skills: ['Node.js', 'NestJS', 'Vue.js', 'React', 'PostgreSQL', 'Docker', 'AWS', 'System Design'],
    socials: [
        { platform: 'github', icon: 'fa-brands fa-github', link: '#' },
        { platform: 'linkedin', icon: 'fa-brands fa-linkedin-in', link: '#' },
        { platform: 'website', icon: 'fa-solid fa-globe', link: '#' }
    ],
    bio: `
        <p>Xin chào! Mình là Thanh Sơn, một kỹ sư phần mềm với hơn 8 năm kinh nghiệm làm việc tại các tập đoàn công nghệ lớn và startup quy mô toàn cầu. Niềm đam mê lớn nhất của mình không chỉ là viết code, mà là thiết kế ra những kiến trúc hệ thống (System Architecture) bền vững và có khả năng mở rộng hàng triệu users.</p>
        <p>Phương pháp giảng dạy của mình tập trung 100% vào thực chiến. Mình không dạy bạn học thuộc cú pháp, mình hướng dẫn bạn cách tư duy như một kỹ sư thực thụ để giải quyết các bài toán hóc búa trong môi trường Production.</p>
    `,
    experiences: [
        { role: 'Solutions Architect', company: 'TechCorp Global', year: '2022 - Hiện tại', description: 'Thiết kế kiến trúc Microservices cho hệ thống Fintech xử lý hơn 10.000 TPS. Lãnh đạo đội ngũ kỹ sư 20 người.' },
        { role: 'Senior Backend Engineer', company: 'E-Commerce Plus', year: '2019 - 2022', description: 'Tối ưu hóa Database PostgreSQL, giảm thời gian query xuống 80%. Xây dựng hệ thống CI/CD tự động.' },
        { role: 'Fullstack Developer', company: 'Startup Nova', year: '2016 - 2019', description: 'Phát triển nền tảng SaaS quản lý doanh nghiệp bằng Vue.js và Node.js. Đưa sản phẩm từ số 0 đạt 10,000 người dùng đầu tiên.' }
    ]
})

// Mock Data: Mentor's Courses
const mentorCourses = ref([
    { id: 1, title: 'Làm chủ Backend thực chiến với PHP & Supabase', category: 'Backend', level: 'Trung cấp', price: 0, rating: 4.9, thumbnail: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=400&q=80' },
    { id: 2, title: 'Xây dựng kiến trúc Microservices với Node.js', category: 'Backend', level: 'Nâng cao', price: 899000, rating: 4.8, thumbnail: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=400&q=80' },
    { id: 3, title: 'Cơ sở dữ liệu PostgreSQL & Tối ưu hóa truy vấn', category: 'Database', level: 'Nâng cao', price: 450000, rating: 4.9, thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80' },
    { id: 4, title: 'DevOps căn bản cho Lập trình viên', category: 'DevOps', level: 'Cơ bản', price: 350000, rating: 4.7, thumbnail: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=400&q=80' }
])

// Mock Data: Reviews
const reviews = ref([
    { id: 1, userName: 'Nguyễn Văn A', userAvatar: 'https://i.pravatar.cc/150?img=11', date: '2 ngày trước', rating: 5, content: 'Khóa học cực kỳ chi tiết. Giảng viên giải thích cặn kẽ lý do tại sao lại sử dụng công nghệ này mà không phải công nghệ khác. Rất đáng tiền!', courseName: 'Xây dựng kiến trúc Microservices với Node.js' },
    { id: 2, userName: 'Trần Thị B', userAvatar: 'https://i.pravatar.cc/150?img=5', date: '1 tuần trước', rating: 5, content: 'Cách thầy Sơn dạy về Database giúp mình thông não rất nhiều kiến thức mà trước giờ mình chỉ làm vẹt. Support trong group lớp cũng rất nhiệt tình.', courseName: 'Cơ sở dữ liệu PostgreSQL & Tối ưu hóa truy vấn' },
    { id: 3, userName: 'Lê Hoàng C', userAvatar: 'https://i.pravatar.cc/150?img=8', date: '2 tuần trước', rating: 4, content: 'Kiến thức rất sâu, tuy nhiên tốc độ nói hơi nhanh ở một số bài nâng cao. Phải xem đi xem lại vài lần mới ngấm.', courseName: 'Làm chủ Backend thực chiến với PHP & Supabase' }
])

// Utils
const formatNumber = (num) => {
    return new Intl.NumberFormat('vi-VN').format(num)
}
const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    height: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
}

/* Transition cho đổi Tab */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style>