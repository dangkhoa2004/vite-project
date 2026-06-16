<template>
    <div>
        <div v-if="(activeTab === 'learning' || activeTab === 'completed') && courses.length > 0" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div v-for="course in courses" :key="course.id" class="group bg-[#1c1e24]/60 backdrop-blur-xl rounded-[24px] border border-white/5 overflow-hidden hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)] transition-all flex flex-col relative">
                <div class="relative h-48 bg-[#0f1115]">
                    <img :src="course.thumbnail" loading="lazy" class="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 ease-out" />
                    <div class="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-white/10 flex items-center gap-1.5">
                        <span class="text-[10px] font-extrabold text-white">{{ course.progress }}%</span>
                    </div>
                </div>
                <div class="p-5 flex flex-col flex-1 relative z-10 -mt-2">
                    <div class="text-[11px] text-gray-400 font-medium mb-2.5"><i class="fa-regular fa-clock"></i> {{ course.lastAccessed }}</div>
                    <h3 class="text-[15px] font-bold text-white mb-5 line-clamp-2 leading-relaxed min-h-[44px]">{{ course.title }}</h3>
                    <div class="mt-auto">
                        <button @click="$emit('continue', course.id)" class="w-full py-3 rounded-xl text-[12px] font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex justify-center gap-2">
                            <i class="fa-solid fa-play text-[11px]"></i> Tiếp tục học
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <div v-else-if="activeTab === 'roadmap'" class="w-full">
            <CourseRoadmap />
        </div>
        
        <div v-else-if="activeTab === 'certificates' && courses.length > 0" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div v-for="course in courses" :key="`cert-${course.id}`" class="bg-[#1c1e24]/60 backdrop-blur-xl rounded-[24px] border border-white/5 overflow-hidden flex flex-col relative">
                <div class="relative h-36 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-6 border-b border-white/5">
                    <div class="relative z-10 w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 text-2xl border border-purple-500/30"><i class="fa-solid fa-certificate"></i></div>
                </div>
                <div class="p-5 flex flex-col flex-1">
                    <h3 class="text-[15px] font-bold text-white mb-4 line-clamp-2">{{ course.title }}</h3>
                    <div class="mt-auto space-y-2.5">
                        <button @click="$emit('copyLink', course.certificateId)" class="w-full py-2 bg-white/5 hover:bg-white/10 text-gray-300 text-[12px] font-bold rounded-xl border border-white/10 flex items-center justify-center gap-1.5">
                            <i class="fa-solid fa-link"></i> Copy Link
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="w-full">
            <div class="flex flex-col items-center justify-center py-20 px-4 text-center bg-[#1c1e24]/40 backdrop-blur-xl rounded-[32px] border border-white/5 border-dashed relative">
                <h2 class="relative z-10 text-xl font-bold text-white mb-2">{{ searchQuery ? 'Không tìm thấy kết quả' : 'Chưa có dữ liệu' }}</h2>
                <button v-if="searchQuery" @click="$emit('clearSearch')" class="px-6 py-3 bg-blue-600 text-white text-xs font-bold rounded-xl mt-4">Xóa bộ lọc tìm kiếm</button>
                <button v-else @click="$emit('explore')" class="px-6 py-3 bg-blue-600 text-white text-xs font-bold rounded-xl mt-4">Tìm khóa học mới</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import CourseRoadmap from '@/modules/courses/components/CourseRoadmap.vue'
defineProps({
    courses: { type: Array, required: true },
    activeTab: { type: String, required: true },
    searchQuery: { type: String, required: true }
})
defineEmits(['continue', 'copyLink', 'clearSearch', 'explore'])
</script>