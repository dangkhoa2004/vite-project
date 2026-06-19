<template>
    <div class="bg-[var(--bg-card)]/80 backdrop-blur-xl border border-[var(--border-color)] rounded-[24px] shadow-sm p-6 md:p-8">
        <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center text-lg shadow-sm border border-orange-500/20">
                <i class="fa-solid fa-bell"></i>
            </div>
            <div>
                <h2 class="text-xl font-bold text-[var(--text-primary)]">Tùy chỉnh thông báo</h2>
                <p class="text-[12px] text-[var(--text-secondary)] mt-0.5">Cài đặt gửi email nhắc nhở cho hệ thống.</p>
            </div>
        </div>

        <div class="flex flex-col gap-4">
            <label v-for="item in items" :key="item.key" class="flex items-center justify-between p-5 bg-[var(--bg-app)] rounded-2xl border border-[var(--border-color)] hover:border-blue-500/30 transition-colors cursor-pointer group">
                <div>
                    <h4 class="text-[14px] font-bold text-[var(--text-primary)] group-hover:text-blue-500 transition-colors">{{ item.label }}</h4>
                    <p class="text-[12px] text-[var(--text-secondary)] mt-1">{{ item.desc }}</p>
                </div>
                <input type="checkbox" :checked="item.key === 'emailReminders' ? emailReminders : newCourseAlerts"
                    @change="onToggle(item.key, $event.target.checked)"
                    class="w-5 h-5 accent-blue-500 cursor-pointer">
            </label>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({ emailReminders: Boolean, newCourseAlerts: Boolean })
const emit = defineEmits(['update:emailReminders', 'update:newCourseAlerts'])

const emailReminders = computed({ get: () => props.emailReminders, set: v => emit('update:emailReminders', v) })
const newCourseAlerts = computed({ get: () => props.newCourseAlerts, set: v => emit('update:newCourseAlerts', v) })

const items = [
    { key: 'emailReminders', label: 'Email nhắc nhở học tập', desc: 'Nhận email nhắc nhở nếu bạn không có hoạt động trong 3 ngày.' },
    { key: 'newCourseAlerts', label: 'Thông báo nội dung mới', desc: 'Nhận thông báo khi giảng viên cập nhật tài liệu hoặc khóa học mới.' }
]

const onToggle = (key, value) => {
    if (key === 'emailReminders') emailReminders.value = value
    else newCourseAlerts.value = value
}
</script>