<template>
    <div class="mb-20">
        <h2 class="text-2xl font-bold text-white mb-8">Khóa học tương tự</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="course in courses" :key="course.id" class="group bg-[#1c1e24]/60 backdrop-blur-md rounded-[24px] p-3 border border-white/5 hover:-translate-y-2 hover:border-blue-500/30 transition-all duration-300">
                <div class="flex gap-4 items-center">
                    <div class="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-white/5">
                        <img :src="course.thumb" alt="Course" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div class="flex-1 py-1">
                        <h3 class="text-[14px] font-bold text-white leading-tight mb-1 group-hover:text-blue-400 transition-colors line-clamp-2">{{ course.title }}</h3>
                        <div class="text-yellow-500 text-[10px] mb-2">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-[15px] font-extrabold text-orange-400">{{ course.price }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    courses: {
        type: Array,
        required: true
    }
})
</script>