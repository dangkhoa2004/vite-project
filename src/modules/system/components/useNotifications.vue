<template>
    <div
        class="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[24px] border border-[var(--border-color)] p-8 shadow-xl">
        <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center text-lg">
                <i class="fa-solid fa-bell"></i>
            </div>
            <h2 class="text-lg font-bold text-[var(--text-primary)]">Tùy chỉnh thông báo</h2>
        </div>

        <div class="flex flex-col gap-4">
            <div v-for="item in [{ key: 'emailReminders', label: 'Email nhắc nhở học tập', desc: 'Nhận email nhắc nhở nếu em không vào học trong 3 ngày.' },
            { key: 'newCourseAlerts', label: 'Thông báo khóa học mới', desc: 'Nhận thông báo khi có khóa học hoặc tài liệu mới.' }]"
                :key="item.key"
                class="flex items-center justify-between p-4 bg-[var(--bg-app)] rounded-xl border border-[var(--border-color)]">
                <div>
                    <h4 class="text-[14px] font-bold text-[var(--text-primary)]">{{ item.label }}</h4>
                    <p class="text-[12px] text-[var(--text-secondary)] mt-0.5">{{ item.desc }}</p>
                </div>
                <input type="checkbox" :checked="item.key === 'emailReminders' ? emailReminders : newCourseAlerts"
                    @change="onToggle(item.key, $event.target.checked)"
                    class="w-5 h-5 accent-blue-500 cursor-pointer">
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    emailReminders: { type: Boolean, default: true },
    newCourseAlerts: { type: Boolean, default: false }
})

const emit = defineEmits(['update:emailReminders', 'update:newCourseAlerts'])

const emailReminders = computed({
    get: () => props.emailReminders,
    set: value => emit('update:emailReminders', value)
})

const newCourseAlerts = computed({
    get: () => props.newCourseAlerts,
    set: value => emit('update:newCourseAlerts', value)
})

const onToggle = (key, value) => {
    if (key === 'emailReminders') {
        emailReminders.value = value
    } else if (key === 'newCourseAlerts') {
        newCourseAlerts.value = value
    }
}
</script>