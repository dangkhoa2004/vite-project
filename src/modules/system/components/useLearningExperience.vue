<template>
    <div class="bg-[var(--bg-card)]/80 backdrop-blur-xl border border-[var(--border-color)] rounded-[24px] shadow-sm p-6 md:p-8">
        <div class="flex items-center gap-3 mb-8">
            <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-lg shadow-sm border border-emerald-500/20">
                <i class="fa-solid fa-laptop-file"></i>
            </div>
            <div>
                <h2 class="text-xl font-bold text-[var(--text-primary)]">Trải nghiệm học tập</h2>
                <p class="text-[12px] text-[var(--text-secondary)] mt-0.5">Cấu hình trình phát video mặc định</p>
            </div>
        </div>

        <div class="space-y-6">
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 bg-[var(--bg-app)] rounded-2xl border border-[var(--border-color)]">
                <div class="space-y-2">
                    <label class="text-[11px] font-bold uppercase tracking-wider text-[var(--text-secondary)] block">Tốc độ phát mặc định</label>
                    <div class="relative">
                        <select v-model="playbackSpeed" class="w-full h-11 px-4 pr-10 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[13px] outline-none focus:border-blue-500 font-medium appearance-none transition-colors cursor-pointer">
                            <option value="1">Chuẩn (1.0x)</option>
                            <option value="1.25">Nhanh (1.25x)</option>
                            <option value="1.5">Rất nhanh (1.5x)</option>
                            <option value="2">Cực nhanh (2.0x)</option>
                        </select>
                        <i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-[var(--text-secondary)] pointer-events-none"></i>
                    </div>
                </div>
                
                <div class="space-y-2">
                    <label class="text-[11px] font-bold uppercase tracking-wider text-[var(--text-secondary)] block">Chất lượng Video</label>
                    <div class="relative">
                        <select v-model="videoQuality" class="w-full h-11 px-4 pr-10 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[13px] outline-none focus:border-blue-500 font-medium appearance-none transition-colors cursor-pointer">
                            <option value="auto">Tự động (Theo mạng)</option>
                            <option value="1080p">Sắc nét (1080p)</option>
                            <option value="720p">Vừa phải (720p)</option>
                            <option value="480p">Tiết kiệm Data (480p)</option>
                        </select>
                        <i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-[var(--text-secondary)] pointer-events-none"></i>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-4">
                <label class="flex items-center justify-between p-5 bg-[var(--bg-app)] rounded-2xl border border-[var(--border-color)] cursor-pointer hover:border-blue-500/30 transition-colors group">
                    <div>
                        <h4 class="text-[14px] font-bold text-[var(--text-primary)] group-hover:text-blue-500 transition-colors">Tự động chuyển bài</h4>
                        <p class="text-[12px] text-[var(--text-secondary)] mt-1">Hệ thống sẽ tự động phát video bài học tiếp theo sau 3 giây.</p>
                    </div>
                    <input type="checkbox" v-model="autoPlay" class="w-5 h-5 accent-blue-500 cursor-pointer">
                </label>

                <label class="flex items-center justify-between p-5 bg-[var(--bg-app)] rounded-2xl border border-[var(--border-color)] cursor-pointer hover:border-blue-500/30 transition-colors group">
                    <div>
                        <h4 class="text-[14px] font-bold text-[var(--text-primary)] group-hover:text-blue-500 transition-colors">Tự động bật Phụ đề (CC)</h4>
                        <p class="text-[12px] text-[var(--text-secondary)] mt-1">Luôn hiển thị phụ đề Tiếng Việt/Tiếng Anh nếu bài giảng có hỗ trợ.</p>
                    </div>
                    <input type="checkbox" v-model="autoSubtitles" class="w-5 h-5 accent-blue-500 cursor-pointer">
                </label>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    autoPlay: Boolean,
    quality: String,
    speed: String,
    subtitles: Boolean
})

const emit = defineEmits(['update:autoPlay', 'update:quality', 'update:speed', 'update:subtitles'])

const autoPlay = computed({ get: () => props.autoPlay, set: val => emit('update:autoPlay', val) })
const videoQuality = computed({ get: () => props.quality, set: val => emit('update:quality', val) })
const playbackSpeed = computed({ get: () => props.speed, set: val => emit('update:speed', val) })
const autoSubtitles = computed({ get: () => props.subtitles, set: val => emit('update:subtitles', val) })
</script>