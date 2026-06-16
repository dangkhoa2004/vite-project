<template>
    <section>
        <div
            class="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[24px] border border-[var(--border-color)] p-6 flex flex-col md:flex-row gap-6 items-start transition-colors duration-300">
            <div class="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-blue-500 to-purple-500 shrink-0 shadow-lg">
                <img :src="instructor.avatar" alt="Avatar"
                    class="w-full h-full rounded-full object-cover border-2 border-[var(--bg-card)]" />
            </div>

            <div class="flex-1">
                <div class="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <div>
                        <h3 class="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                            {{ instructor.name }}
                            <i class="fa-solid fa-circle-check text-blue-500 text-[13px]"></i>
                        </h3>
                        <p class="text-[13px] text-blue-400 font-medium mt-1">{{ instructor.role }}</p>
                    </div>
                    <a :href="`/giang-vien/${instructor.id}`"
                        class="mt-3 md:mt-0 px-4 py-2 bg-[var(--bg-app)] hover:bg-blue-600 border border-[var(--border-color)] hover:border-transparent text-[var(--text-primary)] hover:text-[var(--text-primary)] text-[12px] font-bold rounded-xl transition-all inline-flex items-center gap-2 w-fit">
                        Xem hồ sơ <i class="fa-solid fa-arrow-right text-[10px]"></i>
                    </a>
                </div>

                <div
                    class="flex flex-wrap gap-4 text-[12px] text-[var(--text-secondary)] mb-4 pb-4 border-b border-[var(--border-color)]">
                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-star text-yellow-500"></i> {{
                        instructor.rating }} ({{ instructor.reviews }} đánh giá)</span>
                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-users text-blue-400"></i> {{
                        instructor.students }} học viên</span>
                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-play-circle text-emerald-400"></i> {{
                        instructor.coursesCount }} khóa học</span>
                </div>

                <p class="text-[14px] text-[var(--text-secondary)] leading-relaxed">{{ instructor.bio }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    instructor: {
        type: Object,
        required: true
    }
})
</script>