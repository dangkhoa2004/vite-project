<template>
    <div class="bg-[var(--bg-card)]/60 backdrop-blur-xl rounded-[24px] border border-[var(--border-color)] p-5">
        <h3 class="text-[12px] font-extrabold text-[var(--text-primary)] uppercase tracking-wider mb-4 flex items-center gap-2">
            <i class="fa-solid fa-bolt text-amber-400"></i> Truy cập nhanh
        </h3>

        <div class="flex bg-black/30 p-1 rounded-xl mb-4">
            <button @click="tab = 'bookmarks'" :class="['flex-1 py-2 text-[11px] font-bold rounded-lg', tab === 'bookmarks' ? 'bg-blue-600/90 text-[var(--text-primary)]' : 'text-white']">
                Bookmark ({{ bookmarks.length }})
            </button>
            <button @click="tab = 'notes'" :class="['flex-1 py-2 text-[11px] font-bold rounded-lg', tab === 'notes' ? 'bg-blue-600/90 text-[var(--text-primary)]' : 'text-white']">
                Ghi chú ({{ notes.length }})
            </button>
        </div>
 
        <div class="space-y-3 max-h-[380px] overflow-y-auto custom-scrollbar pr-1">
            <div v-if="tab === 'bookmarks'">
                <div v-if="bookmarks.length" class="space-y-2">
                    <div v-for="item in bookmarks" :key="item.id" @click="$emit('navigate', item.courseId, item.lessonId)" class="p-3 bg-black/20 hover:bg-white/5 rounded-xl border border-[var(--border-color)] cursor-pointer flex gap-3">
                        <div class="min-w-0">
                            <p class="text-xs font-bold text-[var(--text-primary)] line-clamp-1">{{ item.title }}</p>
                            <p class="text-[10px] text-gray-500 line-clamp-1">{{ item.courseTitle }}</p>
                        </div>
                    </div>
                </div>
                <div v-else class="text-center py-10 text-xs text-gray-500">Chưa có bookmark.</div>
            </div>
            <div v-if="tab === 'notes'">
                <div v-if="notes.length" class="space-y-2">
                    <div v-for="item in notes" :key="item.id" @click="$emit('navigate', item.courseId, item.lessonId)" class="p-3 bg-black/20 hover:bg-white/5 rounded-xl border border-[var(--border-color)] cursor-pointer flex flex-col gap-1.5">
                        <div class="flex justify-between items-center">
                            <span class="text-[9px] font-bold text-amber-400 bg-amber-500/10 px-1.5 rounded-md">{{ item.courseCode }}</span>
                        </div>
                        <p class="text-xs text-gray-300 line-clamp-2">"{{ item.content }}"</p>
                    </div>
                </div>
                <div v-else class="text-center py-10 text-xs text-gray-500">Chưa có ghi chú.</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
    bookmarks: { type: Array, required: true },
    notes: { type: Array, required: true }
})
defineEmits(['navigate'])

const tab = ref('bookmarks')
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { width: 4px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.08); border-radius: 4px; }
</style>