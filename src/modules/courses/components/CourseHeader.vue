<template>
    <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 border-b border-white/5 pb-8">
        <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-4 tracking-wide uppercase">
                <i class="fa-solid fa-bolt"></i> Không ngừng học hỏi
            </div>
            <h1 class="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">Khóa học của tôi</h1>
            <p class="text-sm text-gray-400">Tiếp tục hành trình học tập và theo dõi tiến độ của bạn.</p>
        </div>

        <div class="flex gap-4">
            <div class="bg-[#1c1e24]/60 backdrop-blur-md rounded-2xl border border-white/5 p-4 flex items-center gap-4 shadow-lg min-w-[140px]">
                <div class="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-lg">
                    <i class="fa-solid fa-book-open-reader"></i>
                </div>
                <div>
                    <p class="text-[11px] text-gray-400 font-medium">Đang học</p>
                    <p class="text-lg font-bold text-white leading-none mt-1">{{ learningCount }}</p>
                </div>
            </div>
            <div class="bg-[#1c1e24]/60 backdrop-blur-md rounded-2xl border border-white/5 p-4 flex items-center gap-4 shadow-lg min-w-[140px]">
                <div class="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-lg">
                    <i class="fa-solid fa-award"></i>
                </div>
                <div>
                    <p class="text-[11px] text-gray-400 font-medium">Hoàn thành</p>
                    <p class="text-lg font-bold text-white leading-none mt-1">{{ completedCount }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    learningCount: { type: Number, required: true },
    completedCount: { type: Number, required: true }
})
</script>