<template>
    <div class="bg-[#1c1e24]/60 backdrop-blur-xl rounded-[24px] border border-white/5 p-5">
        <h3 class="text-[12px] font-extrabold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <i class="fa-solid fa-bolt text-amber-400"></i> Truy cập nhanh
        </h3>

        <div class="flex bg-black/30 p-1 rounded-xl border border-white/5 mb-4">
            <button @click="tab = 'bookmarks'" :class="['flex-1 py-2 text-[11px] font-bold rounded-lg', tab === 'bookmarks' ? 'bg-blue-600/90 text-white' : 'text-gray-400']">
                Bookmark ({{ bookmarks.length }})
            </button>
            <button @click="tab = 'notes'" :class="['flex-1 py-2 text-[11px] font-bold rounded-lg', tab === 'notes' ? 'bg-blue-600/90 text-white' : 'text-gray-400']">
                Ghi chú ({{ notes.length }})
            </button>
        </div>

        <div class="space-y-3 max-h-[380px] overflow-y-auto custom-scrollbar pr-1">
            <div v-if="tab === 'bookmarks'">
                <div v-if="bookmarks.length" class="space-y-2">
                    <div v-for="item in bookmarks" :key="item.id" @click="$emit('navigate', item.courseId, item.lessonId)" class="p-3 bg-black/20 hover:bg-white/5 rounded-xl border border-white/5 cursor-pointer flex gap-3">
                        <div class="min-w-0">
                            <p class="text-xs font-bold text-white line-clamp-1">{{ item.title }}</p>
                            <p class="text-[10px] text-gray-500 line-clamp-1">{{ item.courseTitle }}</p>
                        </div>
                    </div>
                </div>
                <div v-else class="text-center py-10 text-xs text-gray-500">Chưa có bookmark.</div>
            </div>

            <div v-if="tab === 'notes'">
                <div v-if="notes.length" class="space-y-2">
                    <div v-for="item in notes" :key="item.id" @click="$emit('navigate', item.courseId, item.lessonId)" class="p-3 bg-black/20 hover:bg-white/5 rounded-xl border border-white/5 cursor-pointer flex flex-col gap-1.5">
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

const tab = ref('bookmarks') // State nội bộ cho Sidebar
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { width: 4px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.08); border-radius: 4px; }
</style>