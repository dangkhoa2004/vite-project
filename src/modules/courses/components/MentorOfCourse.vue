<template>
    <section>
        <div class="bg-[#1c1e24]/60 backdrop-blur-xl rounded-[24px] border border-white/5 p-6 flex flex-col md:flex-row gap-6 items-start">
            <div class="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-blue-500 to-purple-500 shrink-0 shadow-lg">
                <img :src="instructor.avatar" alt="Avatar" class="w-full h-full rounded-full object-cover border-2 border-[#1c1e24]" />
            </div>
            <div class="flex-1">
                <div class="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <div>
                        <h3 class="text-xl font-bold text-white flex items-center gap-2">
                            {{ instructor.name }}
                            <i class="fa-solid fa-circle-check text-blue-500 text-[13px]"></i>
                        </h3>
                        <p class="text-[13px] text-blue-400 font-medium mt-1">{{ instructor.role }}</p>
                    </div>
                    <a :href="`/giang-vien/${instructor.id}`"
                        class="mt-3 md:mt-0 px-4 py-2 bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-transparent text-white text-[12px] font-bold rounded-xl transition-all inline-flex items-center gap-2 w-fit">
                        Xem hồ sơ <i class="fa-solid fa-arrow-right text-[10px]"></i>
                    </a>
                </div>

                <div class="flex flex-wrap gap-4 text-[12px] text-gray-400 mb-4 pb-4 border-b border-white/5">
                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-star text-yellow-500"></i> {{ instructor.rating }} ({{ instructor.reviews }} đánh giá)</span>
                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-users text-blue-400"></i> {{ instructor.students }} học viên</span>
                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-play-circle text-emerald-400"></i> {{ instructor.coursesCount }} khóa học</span>
                </div>

                <p class="text-[14px] text-gray-300 leading-relaxed">{{ instructor.bio }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
// ĐÃ SỬA LỖI: Cần defineProps để nhận dữ liệu từ cha
defineProps({
    instructor: {
        type: Object,
        required: true
    }
})
</script>