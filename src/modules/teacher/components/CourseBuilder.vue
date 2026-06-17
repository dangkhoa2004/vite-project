<template>
    <div class="space-y-8">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 p-5 rounded-2xl gap-4">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <i class="fa-solid fa-cloud-arrow-up text-blue-500 text-xl"></i>
                </div>
                <div>
                    <h4 class="text-[14px] font-bold text-blue-500">Thư viện Media (Upload ngầm)</h4>
                    <p class="text-[12px] text-[var(--text-secondary)] mt-0.5">Kéo thả Video/PDF vào đây. Tiến trình tải lên sẽ tiếp tục ngay cả khi bạn thao tác khác.</p>
                </div>
            </div>
            <button class="px-5 py-2.5 bg-[var(--bg-card)] border border-[var(--border-color)] text-[12px] font-bold rounded-xl hover:border-blue-500 hover:text-blue-500 transition-all shadow-sm whitespace-nowrap">
                Mở Media Library
            </button>
        </div>

        <div class="space-y-5">
            <div v-for="(section, sIdx) in curriculum" :key="sIdx" class="border border-[var(--border-color)] rounded-2xl bg-[var(--bg-app)] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div class="bg-[var(--bg-card)]/60 backdrop-blur-md px-5 py-4 flex items-center gap-4 cursor-move border-b border-[var(--border-color)] group">
                    <i class="fa-solid fa-grip-dots-vertical text-[var(--text-secondary)] opacity-40 group-hover:opacity-100 transition-opacity text-lg"></i>
                    <h3 class="text-[15px] font-extrabold flex-1">Chương {{ sIdx + 1 }}: {{ section.title }}</h3>
                    <div class="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button class="w-8 h-8 rounded-lg hover:bg-[var(--bg-app)] border border-transparent hover:border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-blue-500 transition-all"><i class="fa-solid fa-pen text-[12px]"></i></button>
                        <button class="w-8 h-8 rounded-lg hover:bg-red-500/10 border border-transparent hover:border-red-500/20 flex items-center justify-center text-[var(--text-secondary)] hover:text-red-500 transition-all"><i class="fa-solid fa-trash text-[12px]"></i></button>
                    </div>
                </div>

                <div class="p-4 space-y-2.5">
                    <div v-for="(lesson, lIdx) in section.lessons" :key="lIdx" class="flex items-center gap-4 p-3.5 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl hover:border-blue-500/40 transition-all cursor-move group shadow-sm hover:shadow-[0_4px_12px_rgba(37,99,235,0.05)]">
                        <i class="fa-solid fa-grip-vertical text-[var(--text-secondary)] opacity-30 group-hover:opacity-100 text-[10px]"></i>
                        <div class="w-8 h-8 rounded-lg bg-[var(--bg-app)] border border-[var(--border-color)] flex items-center justify-center shrink-0">
                            <i :class="[
                                'text-[13px]',
                                lesson.type === 'video' ? 'fa-solid fa-circle-play text-blue-500' :
                                lesson.type === 'quiz' ? 'fa-solid fa-clipboard-question text-purple-500' :
                                lesson.type === 'assignment' ? 'fa-solid fa-code text-orange-500' : 'fa-solid fa-file-pdf text-rose-500'
                            ]"></i>
                        </div>
                        <span class="text-[13px] font-semibold flex-1 group-hover:text-blue-500 transition-colors">{{ lesson.title }}</span>
                        <span class="text-[11px] font-medium text-[var(--text-secondary)] bg-[var(--bg-app)] px-2.5 py-1 rounded-md border border-[var(--border-color)]">{{ lesson.duration }}</span>
                        <button class="text-[11px] font-bold bg-[var(--bg-app)] border border-[var(--border-color)] px-3 py-1.5 rounded-lg hover:text-blue-500 hover:border-blue-500/50 transition-all opacity-0 group-hover:opacity-100">Sửa</button>
                    </div>

                    <div class="pt-3 flex flex-wrap gap-2.5">
                        <button class="px-4 py-2 border border-[var(--border-color)] border-dashed rounded-xl text-[12px] font-bold text-[var(--text-secondary)] hover:text-blue-500 hover:bg-blue-500/5 hover:border-blue-500/30 transition-all flex items-center gap-2">
                            <i class="fa-solid fa-plus text-[10px]"></i> Bài học / Video
                        </button>
                        <button class="px-4 py-2 border border-[var(--border-color)] border-dashed rounded-xl text-[12px] font-bold text-[var(--text-secondary)] hover:text-purple-500 hover:bg-purple-500/5 hover:border-purple-500/30 transition-all flex items-center gap-2">
                            <i class="fa-solid fa-plus text-[10px]"></i> Quiz / Trắc nghiệm
                        </button>
                        <button class="px-4 py-2 border border-[var(--border-color)] border-dashed rounded-xl text-[12px] font-bold text-[var(--text-secondary)] hover:text-orange-500 hover:bg-orange-500/5 hover:border-orange-500/30 transition-all flex items-center gap-2">
                            <i class="fa-solid fa-plus text-[10px]"></i> Bài tập tự luận
                        </button>
                    </div>
                </div>
            </div>
            
            <button class="w-full py-4 border-2 border-[var(--border-color)] border-dashed rounded-2xl text-[14px] font-bold text-[var(--text-secondary)] hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all flex items-center justify-center gap-2">
                <i class="fa-solid fa-folder-plus"></i> Thêm Chương Mới
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const curriculum = ref([
    { title: 'Khởi đầu với Vue 3', lessons: [ { title: 'Cài đặt môi trường Node.js & Vite', duration: '10:25', type: 'video' }, { title: 'Tài liệu Slide Bài 1', duration: '2 MB', type: 'pdf' } ] },
    { title: 'Composition API Chuyên sâu', lessons: [ { title: 'Sự khác biệt giữa ref() và reactive()', duration: '15:10', type: 'video' }, { title: 'Bài tập: Build To-do App', duration: 'Tự luận', type: 'assignment' }, { title: 'Kiểm tra kiến thức chương 2', duration: '15 câu', type: 'quiz' } ] }
]);
</script>