<template>
    <div
        class="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[24px] border border-[var(--border-color)] p-8 shadow-xl">
        <div class="flex items-center gap-3 mb-6">
            <div
                class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-lg">
                <i class="fa-solid fa-laptop-file"></i>
            </div>
            <h2 class="text-lg font-bold text-[var(--text-primary)]">Trải nghiệm học tập</h2>
        </div>

        <div class="flex flex-col gap-5">
            <div
                class="flex items-center justify-between p-4 bg-[var(--bg-app)] rounded-xl border border-[var(--border-color)]">
                <div>
                    <h4 class="text-[14px] font-bold text-[var(--text-primary)]">Tự động chuyển bài học</h4>
                    <p class="text-[12px] text-[var(--text-secondary)] mt-1">Tự động chuyển sang video tiếp theo.</p>
                </div>
                <input type="checkbox" v-model="autoPlay" class="w-5 h-5 accent-blue-500 cursor-pointer">
            </div>

            <DropDownUI v-model="videoQuality" :options="[{label: 'Tự động', value: 'auto'}, {label: '1080p', value: '1080p'}]" />
        </div>
    </div>
</template>

<script setup>
import DropDownUI from '@/components/DropDownUI.vue'
import { computed } from 'vue'

const props = defineProps({
    autoPlay: { type: Boolean, default: true },
    quality: { type: String, default: 'auto' }
})

const emit = defineEmits(['update:autoPlay', 'update:quality'])

const autoPlay = computed({
    get: () => props.autoPlay,
    set: value => emit('update:autoPlay', value)
})

const videoQuality = computed({
    get: () => props.quality,
    set: value => emit('update:quality', value)
})
</script>