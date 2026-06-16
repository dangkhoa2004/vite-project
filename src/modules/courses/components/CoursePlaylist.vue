<template>
    <div
        class="bg-[var(--bg-card)]/80 backdrop-blur-xl rounded-[24px] border border-[var(--border-color)] shadow-xl flex flex-col h-[400px] lg:h-auto max-h-[500px]">
        <div class="p-5 border-b border-[var(--border-color)]">
            <h3 class="text-lg font-bold text-[var(--text-primary)]">Danh sách bài học</h3>
        </div>

        <div class="flex-1 overflow-y-auto p-3 custom-scrollbar flex flex-col gap-2">
            <div v-for="(video, index) in playlist" :key="index" :class="[
                'flex items-center gap-4 p-3 rounded-[16px] cursor-pointer transition-all duration-300 border',
                video.active
                    ? 'bg-blue-500/10 border-blue-500/30 shadow-inner'
                    : 'bg-transparent border-transparent hover:bg-[var(--border-color)]'
            ]">
                <div class="relative w-24 h-16 rounded-xl overflow-hidden shrink-0 border border-[var(--border-color)]">
                    <img :src="video.thumb" alt="thumb" class="w-full h-full object-cover opacity-80" />
                    <div class="absolute inset-0 flex items-center justify-center bg-black/20">
                        <i v-if="video.active" class="fa-solid fa-play-circle text-blue-400 text-xl"></i>
                        <i v-else class="fa-solid fa-lock text-[var(--text-secondary)] text-sm"></i>
                    </div>
                </div>
                <div class="flex-1 min-w-0">
                    <h4
                        :class="['text-[13px] font-bold line-clamp-2 mb-1', video.active ? 'text-blue-400' : 'text-[var(--text-primary)]']">
                        {{ video.title }}
                    </h4>
                    <span class="text-[11px] text-[var(--text-secondary)] font-medium">
                        <i class="fa-regular fa-clock mr-1"></i>{{ video.duration }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    playlist: { type: Array, required: true }
})
</script>

<style scoped>
/* Scrollbar sử dụng biến màu toàn cục của dự án */
.custom-scrollbar::-webkit-scrollbar {
    width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: var(--text-secondary);
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: var(--text-primary);
}
</style>