<template>
    <HomePageHeader />
    <div class="min-h-screen bg-[#0f1115] text-gray-200 font-sans relative overflow-hidden pb-20 pt-28">

        <div
            class="absolute top-0 left-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0">
        </div>
        <div
            class="absolute bottom-0 right-[-10%] w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0">
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-6">

            <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div>
                    <h1 class="text-3xl font-extrabold text-white tracking-tight mb-2">Thư viện khóa học</h1>
                    <p class="text-sm text-gray-400">Khám phá {{ filteredCourses.length }} khóa học chuyên sâu dành cho
                        lập trình viên</p>
                </div>

                <div
                    class="w-full md:w-80 bg-[#1c1e24]/80 backdrop-blur-md rounded-xl p-1 flex items-center border border-white/10 focus-within:border-blue-500/50 transition-colors">
                    <i class="fa-solid fa-magnifying-glass text-gray-500 ml-4 mr-2"></i>
                    <input v-model="searchQuery" type="text" placeholder="Tìm tên khóa học..."
                        class="w-full bg-transparent border-none text-white text-sm py-2 focus:outline-none placeholder-gray-600" />
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">

                <aside
                    class="bg-[#1c1e24]/60 backdrop-blur-md rounded-[24px] border border-white/5 p-6 space-y-8 sticky top-28">
                    <div class="flex items-center justify-between border-b border-white/5 pb-4">
                        <h3 class="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                            <i class="fa-solid fa-filter text-blue-400"></i> Bộ lọc tìm kiếm
                        </h3>
                        <button @click="resetFilters"
                            class="text-xs text-gray-500 hover:text-blue-400 transition-colors">Xóa bộ lọc</button>
                    </div>

                    <div>
                        <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">Danh mục chuyên môn
                        </h4>
                        <div class="flex flex-col gap-3">
                            <label v-for="cat in categories" :key="cat"
                                class="flex items-center gap-3 text-[13px] text-gray-300 cursor-pointer hover:text-white select-none">
                                <input type="checkbox" :value="cat" v-model="selectedCategories"
                                    class="accent-blue-500 rounded border-white/10 bg-black/20" />
                                {{ cat }}
                            </label>
                        </div>
                    </div>

                    <div>
                        <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">Trình độ học viên</h4>
                        <div class="flex flex-col gap-3">
                            <label v-for="level in levels" :key="level"
                                class="flex items-center gap-3 text-[13px] text-gray-300 cursor-pointer hover:text-white select-none">
                                <input type="checkbox" :value="level" v-model="selectedLevels"
                                    class="accent-blue-500 rounded border-white/10 bg-black/20" />
                                {{ level }}
                            </label>
                        </div>
                    </div>

                    <div>
                        <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">Học phí</h4>
                        <div class="flex flex-col gap-3">
                            <label
                                class="flex items-center gap-3 text-[13px] text-gray-300 cursor-pointer hover:text-white">
                                <input type="radio" value="all" v-model="priceFilter" class="accent-blue-500" /> Tất cả
                                giá
                            </label>
                            <label
                                class="flex items-center gap-3 text-[13px] text-gray-300 cursor-pointer hover:text-white">
                                <input type="radio" value="free" v-model="priceFilter" class="accent-blue-500" /> Miễn
                                phí
                            </label>
                            <label
                                class="flex items-center gap-3 text-[13px] text-gray-300 cursor-pointer hover:text-white">
                                <input type="radio" value="paid" v-model="priceFilter" class="accent-blue-500" /> Có phí
                            </label>
                        </div>
                    </div>
                </aside>

                <div class="space-y-5">

                    <div
                        class="flex justify-between items-center bg-[#1c1e24]/40 px-5 py-3 rounded-xl border border-white/5 text-xs text-gray-400">
                        <span>Hiển thị {{ filteredCourses.length }} kết quả</span>
                        <div class="flex items-center gap-2">
                            <span>Sắp xếp theo:</span>
                            <select v-model="sortBy"
                                class="bg-[#2a2d35] border border-white/10 rounded-lg px-2 py-1 text-white focus:outline-none cursor-pointer">
                                <option value="newest">Mới nhất</option>
                                <option value="priceAsc">Giá thấp đến cao</option>
                                <option value="priceDesc">Giá cao đến thấp</option>
                            </select>
                        </div>
                    </div>

                    <div v-if="filteredCourses.length > 0" class="flex flex-col gap-4">

                        <div v-for="course in filteredCourses" :key="course.id"
                            class="group flex flex-col md:flex-row bg-[#1c1e24]/60 backdrop-blur-md rounded-[20px] border border-white/5 overflow-hidden hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgba(59,130,246,0.08)] transition-all duration-300 p-4 gap-6">
                            <div
                                class="w-full md:w-52 h-36 rounded-xl overflow-hidden shrink-0 relative border border-white/5">
                                <img :src="course.thumbnail" :alt="course.title"
                                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <span
                                    class="absolute top-2 left-2 z-10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white bg-black/60 rounded border border-white/10">
                                    {{ course.category }}
                                </span>
                            </div>

                            <div class="flex-1 flex flex-col justify-between min-w-0 py-1">
                                <div>
                                    <div class="flex items-center gap-2 mb-1.5">
                                        <span
                                            class="text-[11px] font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full">
                                            {{ course.level }}
                                        </span>
                                        <div class="flex items-center text-yellow-500 text-[11px] gap-0.5">
                                            <i class="fa-solid fa-star"></i>
                                            <span class="text-gray-300 font-bold ml-1">{{ course.rating }}</span>
                                        </div>
                                    </div>

                                    <h3
                                        class="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors truncate">
                                        {{ course.title }}
                                    </h3>
                                    <p class="text-[13px] text-gray-400 line-clamp-2 leading-relaxed">
                                        {{ course.description }}
                                    </p>
                                </div>

                                <div
                                    class="flex items-center gap-5 text-xs text-gray-500 mt-4 md:mt-0 pt-3 md:pt-0 border-t md:border-none border-white/5">
                                    <span class="flex items-center gap-1.5"><i
                                            class="fa-solid fa-book-open text-[11px]"></i> {{ course.lessons }} bài
                                        học</span>
                                    <span class="flex items-center gap-1.5"><i
                                            class="fa-regular fa-clock text-[11px]"></i> {{ course.duration }}</span>
                                    <span class="flex items-center gap-1.5"><i
                                            class="fa-solid fa-user-graduate text-[11px]"></i> {{ course.students }} học
                                        viên</span>
                                </div>
                            </div>

                            <div
                                class="w-full md:w-44 flex md:flex-col justify-between md:justify-center items-center md:items-end gap-4 md:pl-6 md:border-l border-white/5">
                                <div class="text-right flex flex-col">
                                    <span v-if="course.price > 0" class="text-xs text-gray-500 line-through mb-0.5">
                                        {{ formatPrice(course.price * 1.3) }}
                                    </span>
                                    <span
                                        :class="['text-lg font-extrabold tracking-wide', course.price === 0 ? 'text-emerald-400' : 'text-white']">
                                        {{ course.price === 0 ? 'Miễn phí' : formatPrice(course.price) }}
                                    </span>
                                </div>

                                <a :href="`/chi-tiet-khoa-hoc`" class="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-semibold rounded-xl transition-all shadow-md flex items-center gap-2 group-hover:-translate-y-0.5">
                                    Chi tiết <i class="fa-solid fa-arrow-right text-[10px]"></i>
                                </a>
                            </div>

                        </div>

                    </div>

                    <div v-else class="text-center py-16 bg-[#1c1e24]/20 rounded-2xl border border-white/5">
                        <i class="fa-solid fa-folder-open text-gray-600 text-3xl mb-4"></i>
                        <p class="text-sm text-gray-500">Không tìm thấy khóa học nào phù hợp với bộ lọc hiện tại.</p>
                    </div>

                    <div v-if="filteredCourses.length > 0" class="flex justify-center items-center gap-2 pt-8">
                        <button
                            class="w-9 h-9 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-xl text-xs text-gray-400 transition-colors disabled:opacity-30"
                            disabled>
                            <i class="fa-solid fa-chevron-left"></i>
                        </button>
                        <button
                            class="w-9 h-9 flex items-center justify-center bg-blue-600 text-white rounded-xl text-xs font-bold">1</button>
                        <button
                            class="w-9 h-9 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-xl text-xs text-gray-400 transition-colors">2</button>
                        <button
                            class="w-9 h-9 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-xl text-xs text-gray-400 transition-colors">3</button>
                        <button
                            class="w-9 h-9 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-xl text-xs text-gray-400 transition-colors">
                            <i class="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>

                </div>

            </div>

        </div>
    </div>
    <HomePageFooter />
</template>
<script setup>
import HomePageHeader from '@/layouts/HomePageHeader.vue'
import HomePageFooter from '@/layouts/HomePageFooter.vue'
import { ref, computed } from 'vue'

// Định nghĩa dữ liệu bộ lọc tĩnh cho Sidebar
const categories = ['Backend', 'Frontend', 'Database', 'DevOps']
const levels = ['Cơ bản', 'Trung cấp', 'Nâng cao']

// Trạng thái lưu trữ bộ lọc của người dùng
const searchQuery = ref('')
const selectedCategories = ref([])
const selectedLevels = ref([])
const priceFilter = ref('all')
const sortBy = ref('newest')

// Mock Data mở rộng danh sách với số lượng lớn khóa học (Rất nhiều Courses)
const courses = ref([
    {
        id: 1,
        title: 'Xây dựng hệ thống Backend với NestJS chuyên sâu',
        description: 'Học cách thiết kế kiến trúc microservices, tối ưu hóa RESTful API hiệu suất cao và xử lý cơ sở dữ liệu lớn thực chiến.',
        category: 'Backend',
        level: 'Nâng cao',
        price: 0,
        lessons: 45,
        duration: '32 giờ',
        students: 1250,
        rating: 4.9,
        thumbnail: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 2,
        title: 'Frontend hiện đại hoàn chỉnh với Vue 3 & TypeScript',
        description: 'Làm chủ Composition API, Pinia State Management, Vue Router và tích hợp chặt chẽ với TypeScript trong các dự án lớn.',
        category: 'Frontend',
        level: 'Trung cấp',
        price: 599000,
        lessons: 38,
        duration: '28 giờ',
        students: 840,
        rating: 4.8,
        thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 3,
        title: 'Làm chủ Cơ sở dữ liệu quan hệ PostgreSQL tối ưu',
        description: 'Thiết kế chuẩn hóa cơ sở dữ liệu, tối ưu hóa các câu lệnh query phức tạp, indexing chuyên sâu và phân vùng bảng lớn.',
        category: 'Database',
        level: 'Cơ bản',
        price: 450000,
        lessons: 30,
        duration: '20 giờ',
        students: 620,
        rating: 4.7,
        thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 4,
        title: 'CI/CD Pipeline toàn diện với Docker và Github Actions',
        description: 'Tự động hóa hoàn toàn quy trình build, test và deploy ứng dụng container hóa lên các môi trường cloud thực tế.',
        category: 'DevOps',
        level: 'Nâng cao',
        price: 750000,
        lessons: 25,
        duration: '18 giờ',
        students: 410,
        rating: 4.9,
        thumbnail: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 5,
        title: 'Lập trình JavaScript nền tảng vững chắc từ số 0',
        description: 'Hiểu sâu về Core Engine của JS, Event Loop, lập trình bất đồng bộ ES6+ giúp tự tin chuyển tiếp lên các Framework.',
        category: 'Frontend',
        level: 'Cơ bản',
        price: 0,
        lessons: 50,
        duration: '35 giờ',
        students: 3100,
        rating: 4.6,
        thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 6,
        title: 'Xây dựng REST API hoàn chỉnh với Node.js Express',
        description: 'Khóa học thực hành xây dựng trọn vẹn hệ thống API, quản lý xác thực JWT, phân quyền tài khoản người dùng bảo mật.',
        category: 'Backend',
        level: 'Trung cấp',
        price: 350000,
        lessons: 32,
        duration: '22 giờ',
        students: 980,
        rating: 4.7,
        thumbnail: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=400&q=80'
    }
])

// Bộ lọc tính toán tự động dựa trên phản ứng dữ liệu (Reactive Filters)
const filteredCourses = computed(() => {
    let result = [...courses.value]

    // 1. Lọc theo từ khóa tìm kiếm
    if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase().trim()
        result = result.filter(c => c.title.toLowerCase().includes(query))
    }

    // 2. Lọc theo checkbox danh mục chuyên môn
    if (selectedCategories.value.length > 0) {
        result = result.filter(c => selectedCategories.value.includes(c.category))
    }

    // 3. Lọc theo checkbox trình độ
    if (selectedLevels.value.length > 0) {
        result = result.filter(c => selectedLevels.value.includes(c.level))
    }

    // 4. Lọc theo giá (Miễn phí / Có phí)
    if (priceFilter.value === 'free') {
        result = result.filter(c => c.price === 0)
    } else if (priceFilter.value === 'paid') {
        result = result.filter(c => c.price > 0)
    }

    // 5. Logic Sắp xếp kết quả dữ liệu
    if (sortBy.value === 'priceAsc') {
        result.sort((a, b) => a.price - b.price)
    } else if (sortBy.value === 'priceDesc') {
        result.sort((a, b) => b.price - a.price)
    } else if (sortBy.value === 'newest') {
        result.sort((a, b) => b.id - a.id) // Id lớn hơn hiển thị trước
    }

    return result
})

// Định dạng giá tiền Việt Nam
const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
}

// Hàm xóa toàn bộ bộ lọc về trạng thái mặc định
const resetFilters = () => {
    searchQuery.value = ''
    selectedCategories.value = []
    selectedLevels.value = []
    priceFilter.value = 'all'
    sortBy.value = 'newest'
}
</script>

<style scoped>
/* Không cần CSS thuần vì cấu trúc layout co giãn đã được Tailwind kiểm soát hoàn hảo */
</style>