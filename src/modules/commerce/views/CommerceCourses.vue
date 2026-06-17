<template>
    <HomePageHeader />
    <div
        class="min-h-screen bg-[var(--bg-app)] text-[var(--text-primary)] font-sans relative overflow-hidden pb-20 pt-28 transition-colors duration-300">

        <div
            class="absolute top-0 left-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0">
        </div>
        <div
            class="absolute bottom-0 right-[-10%] w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0">
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-6">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div>
                    <h1 class="text-3xl font-extrabold text-[var(--text-primary)] tracking-tight mb-2">Thư viện khóa học
                    </h1>
                    <p class="text-sm text-[var(--text-secondary)]">Khám phá {{ filteredCourses.length }} khóa học
                        chuyên sâu được đánh giá cao.</p>
                </div>

                <div
                    class="w-full md:w-80 bg-[var(--bg-card)] backdrop-blur-md rounded-xl p-1 flex items-center border border-[var(--border-color)] focus-within:border-blue-500/50 transition-colors shadow-inner">
                    <i class="fa-solid fa-magnifying-glass text-[var(--text-secondary)] ml-4 mr-2"></i>
                    <input v-model="searchQuery" type="text" placeholder="Tìm tên khóa học..."
                        class="w-full bg-transparent border-none text-[var(--text-primary)] text-sm py-2 focus:outline-none placeholder-[var(--text-secondary)]" />
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 items-start">
                <CommerceCourseFilter :ratings="ratings" :tools="tools" v-model:selectedRating="selectedRating"
                    v-model:selectedTools="selectedTools" v-model:priceFilter="priceFilter"
                    @resetFilters="resetFilters" />

                <div class="space-y-5">
                    <div
                        class="flex justify-between items-center bg-[var(--bg-card)]/40 px-5 py-3 rounded-xl border border-[var(--border-color)] text-xs text-[var(--text-secondary)]">
                        <span>Hiển thị <b class="text-[var(--text-primary)]">{{ filteredCourses.length }}</b> kết
                            quả</span>

                        <div class="flex items-center gap-4">
                            <div
                                class="hidden sm:flex bg-black/10 dark:bg-black/30 p-1 rounded-lg border border-[var(--border-color)]">
                                <button @click="viewMode = 'grid'"
                                    :class="['w-7 h-7 flex items-center justify-center rounded transition-all', viewMode === 'grid' ? 'bg-[var(--border-color)] text-[var(--text-primary)] shadow' : 'text-[var(--text-secondary)]']">
                                    <i class="fa-solid fa-border-all text-[13px]"></i>
                                </button>
                                <button @click="viewMode = 'list'"
                                    :class="['w-7 h-7 flex items-center justify-center rounded transition-all', viewMode === 'list' ? 'bg-[var(--border-color)] text-[var(--text-primary)] shadow' : 'text-[var(--text-secondary)]']">
                                    <i class="fa-solid fa-list text-[13px]"></i>
                                </button>
                            </div>
                            <div class="relative w-36 sm:w-40" ref="sortDropdownRef">
                                <button @click="isSortDropdownOpen = !isSortDropdownOpen"
                                    class="w-full flex items-center justify-between bg-[var(--bg-app)] border border-[var(--border-color)] rounded-lg pl-3 pr-2 py-2 text-[12px] font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all">
                                    <span class="truncate">{{ currentSortLabel }}</span>
                                    <i
                                        :class="['fa-solid fa-chevron-down text-[10px] transition-transform duration-300', isSortDropdownOpen ? 'rotate-180' : '']"></i>
                                </button>
                                <Transition name="dropdown-fade">
                                    <div v-if="isSortDropdownOpen"
                                        class="absolute right-0 top-full mt-2 w-48 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl shadow-xl z-50 py-1.5 backdrop-blur-xl">
                                        <ul>
                                            <li v-for="opt in sortOptions" :key="opt.value"
                                                @click="selectSort(opt.value)"
                                                :class="['px-4 py-2 text-[12px] cursor-pointer transition-colors', sortBy === opt.value ? 'text-blue-400 bg-blue-500/10 font-bold' : 'text-[var(--text-secondary)] hover:bg-[var(--border-color)]']">
                                                {{ opt.label }}
                                            </li>
                                        </ul>
                                    </div>
                                </Transition>
                            </div>
                        </div>
                    </div>

                    <div v-if="filteredCourses.length > 0"
                        :class="[viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5' : 'flex flex-col gap-4']">
                        <ListCommerceCourses v-for="course in filteredCourses" :key="course.id" :course="course"
                            :layout="viewMode" />
                    </div>

                    <div v-else
                        class="text-center py-20 bg-[var(--bg-card)]/20 rounded-[24px] border border-[var(--border-color)]">
                        <div
                            class="w-16 h-16 bg-[var(--border-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fa-solid fa-box-open text-[var(--text-secondary)] text-2xl"></i>
                        </div>
                        <p class="text-sm text-[var(--text-secondary)]">Không tìm thấy khóa học nào phù hợp.</p>
                        <button @click="resetFilters"
                            class="mt-4 px-5 py-2 bg-[var(--border-color)] hover:opacity-80 border border-[var(--border-color)] text-[var(--text-primary)] rounded-xl text-xs font-bold transition-colors">
                            Xóa bộ lọc
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <HomePageFooter />
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import CommerceCourseFilter from '../components/CommerceCourseFilter.vue'
import ListCommerceCourses from '../components/ListCommerceCourses.vue'
import HomePageHeader from '@/layouts/HomePageHeader.vue'
import HomePageFooter from '@/layouts/HomePageFooter.vue'
import DropDownUI from '@/components/DropDownUI.vue'

const viewMode = ref('list')

const courses = ref([
    {
        id: 1, title: 'Làm chủ Backend thực chiến với PHP & Supabase', description: 'Thiết kế RESTful API mạnh mẽ, quản lý xác thực và cơ sở dữ liệu thời gian thực cực nhanh với hệ sinh thái Supabase.',
        category: 'Backend', level: 'Trung cấp', price: 0, lessons: 42, duration: '30 giờ', students: 2150, rating: 4.9, reviews: 340,
        thumbnail: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=600&q=80',
        badges: ['Bán chạy', 'Mới'],
        tools: ['PHP', 'Supabase', 'Git'],
        whatYouWillLearn: ['Xây dựng API bảo mật với PHP', 'Quản lý Auth và Database bằng Supabase', 'Triển khai dự án lên Production'],
        instructor: { name: 'Thanh Sơn', avatar: 'https://i.pravatar.cc/150?u=1' }
    },
    {
        id: 2, title: 'Frontend hiện đại hoàn chỉnh với Vue 3 & Figma', description: 'Từ bản thiết kế Figma chuyên nghiệp đến ứng dụng Vue 3 hoàn chỉnh với Composition API và Pinia.',
        category: 'Frontend', level: 'Cơ bản', price: 599000, lessons: 38, duration: '28 giờ', students: 840, rating: 4.8, reviews: 125,
        thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
        badges: ['Mới'],
        tools: ['Vue', 'Figma', 'CSS'],
        whatYouWillLearn: ['Cắt HTML/CSS chuẩn pixel từ Figma', 'Làm chủ Vue 3 Composition API', 'Quản lý state với Pinia'],
        instructor: { name: 'Hoàng Lan', avatar: 'https://i.pravatar.cc/150?u=2' }
    },
    {
        id: 3, title: 'Cơ sở dữ liệu PostgreSQL & Tối ưu hóa truy vấn', description: 'Thiết kế chuẩn hóa cơ sở dữ liệu, tối ưu hóa các câu lệnh query phức tạp và phân vùng bảng lớn.',
        category: 'Database', level: 'Nâng cao', price: 450000, lessons: 30, duration: '20 giờ', students: 620, rating: 4.5, reviews: 88,
        thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
        badges: [],
        tools: ['PostgreSQL', 'Docker'],
        whatYouWillLearn: ['Thiết kế CSDL chuẩn DNF', 'Tạo Index và Explain Query', 'Chạy DB qua Docker Container'],
        instructor: { name: 'Văn Toàn', avatar: 'https://i.pravatar.cc/150?u=3' }
    }
])

const ratings = [
    { value: 0, label: 'Tất cả' },
    { value: 4.5, label: 'Từ 4.5 sao trở lên' },
    { value: 4.0, label: 'Từ 4.0 sao trở lên' },
    { value: 3.5, label: 'Từ 3.5 sao trở lên' }
]
const tools = ['PHP', 'Vue', 'Supabase', 'Git', 'Figma', 'PostgreSQL', 'Docker']

const searchQuery = ref('')
const selectedRating = ref(0)
const selectedTools = ref([])
const priceFilter = ref('all')
const sortBy = ref('newest')

// Logic cho Custom Sort Dropdown
const isSortDropdownOpen = ref(false)
const sortDropdownRef = ref(null)

const sortOptions = [
    { value: 'newest', label: 'Mới nhất' },
    { value: 'priceAsc', label: 'Giá thấp đến cao' },
    { value: 'priceDesc', label: 'Giá cao đến thấp' }
]

const currentSortLabel = computed(() => {
    return sortOptions.find(opt => opt.value === sortBy.value)?.label || 'Sắp xếp'
})

const selectSort = (value) => {
    sortBy.value = value
    isSortDropdownOpen.value = false
}

// Xử lý Click ra ngoài để đóng menu Sắp xếp
const handleClickOutside = (event) => {
    if (sortDropdownRef.value && !sortDropdownRef.value.contains(event.target)) {
        isSortDropdownOpen.value = false
    }
}
onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))


const filteredCourses = computed(() => {
    let result = [...courses.value]
    if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase().trim()
        result = result.filter(c => c.title.toLowerCase().includes(query))
    }
    if (selectedRating.value > 0) result = result.filter(c => c.rating >= selectedRating.value)
    if (selectedTools.value.length > 0) result = result.filter(c => c.tools.some(t => selectedTools.value.includes(t)))

    if (priceFilter.value === 'free') result = result.filter(c => c.price === 0)
    else if (priceFilter.value === 'paid') result = result.filter(c => c.price > 0)

    if (sortBy.value === 'priceAsc') result.sort((a, b) => a.price - b.price)
    else if (sortBy.value === 'priceDesc') result.sort((a, b) => b.price - a.price)
    else if (sortBy.value === 'newest') result.sort((a, b) => b.id - a.id)
    return result
})

const resetFilters = () => {
    searchQuery.value = ''
    selectedRating.value = 0
    selectedTools.value = []
    priceFilter.value = 'all'
    sortBy.value = 'newest'
}
</script>

<style scoped>
/* Hiệu ứng Dropdown Sắp xếp */
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}
</style>