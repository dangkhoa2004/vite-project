<template>
    <HomePageHeader />
    <div
        class="min-h-screen bg-[var(--bg-app)] text-[var(--text-primary)] font-sans relative overflow-hidden pb-20 pt-28 transition-colors duration-300">

        <div
            class="absolute top-[10%] right-[-5%] w-[40vw] h-[40vw] bg-red-600/10 rounded-full blur-[140px] pointer-events-none z-0">
        </div>
        <div
            class="absolute bottom-[20%] left-[-10%] w-[35vw] h-[35vw] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0">
        </div>

        <main class="relative z-10 max-w-7xl mx-auto px-6">
            <div class="mb-10">
                <h1 class="text-3xl font-extrabold text-[var(--text-primary)] tracking-tight mb-2">Bảo mật & Mật khẩu
                </h1>
                <p class="text-sm text-[var(--text-secondary)]">Bảo vệ tài khoản bằng mật khẩu mạnh và các lớp bảo mật
                    bổ sung.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 items-start">
                <aside
                    class="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[24px] border border-[var(--border-color)] overflow-hidden sticky top-28 shadow-xl">
                    <div class="p-6 border-b border-[var(--border-color)] flex items-center gap-4">
                        <div
                            class="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-[var(--text-primary)] font-bold text-lg shadow-lg">
                            K</div>
                        <div>
                            <h3 class="text-[15px] font-bold text-[var(--text-primary)] truncate w-32">Cao Đăng Khoa
                            </h3>
                            <p class="text-[12px] text-[var(--text-secondary)]">Học viên</p>
                        </div>
                    </div>
                    <SettingNavInformation />
                </aside>

                <div class="flex flex-col gap-6">
                    <div
                        class="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[24px] border border-[var(--border-color)] p-8 shadow-xl">
                        <div class="flex items-center gap-3 mb-6">
                            <div
                                class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-lg">
                                <i class="fa-solid fa-key"></i>
                            </div>
                            <h2 class="text-lg font-bold text-[var(--text-primary)]">Đổi mật khẩu</h2>
                        </div>

                        <form @submit.prevent="handleChangePassword" class="space-y-5 max-w-lg">
                            <div v-for="(field, label) in { 'Mật khẩu hiện tại': 'old', 'Mật khẩu mới': 'new', 'Xác nhận mật khẩu mới': 'confirm' }"
                                :key="field" class="flex flex-col gap-1.5">
                                <label class="text-[13px] font-medium text-[var(--text-secondary)] ml-1">{{ label
                                    }}</label>
                                <div class="relative group">
                                    <input :type="showPass[field] ? 'text' : 'password'" v-model="passwords[field]"
                                        class="w-full bg-[var(--bg-app)] border border-[var(--border-color)] rounded-xl py-3 pl-4 pr-11 text-[var(--text-primary)] text-[13px] focus:outline-none focus:border-blue-500 transition-all placeholder-[var(--text-secondary)]"
                                        placeholder="••••••••" required />
                                    <button type="button" @click="showPass[field] = !showPass[field]"
                                        class="absolute inset-y-0 right-0 pr-4 flex items-center text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                                        <i
                                            :class="showPass[field] ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'"></i>
                                    </button>
                                </div>
                            </div>
                            <button type="submit" :disabled="isSaving"
                                class="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-[var(--text-primary)] text-[13px] font-bold rounded-xl shadow-md transition-all flex items-center gap-2">
                                {{ isSaving ? 'Đang cập nhật...' : 'Cập nhật mật khẩu' }}
                            </button>
                        </form>
                    </div>

                    <div
                        class="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[24px] border border-[var(--border-color)] p-8 shadow-xl">
                        <div class="flex items-center justify-between mb-6">
                            <div class="flex items-center gap-4">
                                <div
                                    class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-lg">
                                    <i class="fa-solid fa-shield-cat"></i></div>
                                <div>
                                    <h2 class="text-lg font-bold text-[var(--text-primary)] mb-1">Xác thực 2 bước (2FA)
                                    </h2>
                                    <p class="text-[13px] text-[var(--text-secondary)] max-w-md">Tăng cường bảo mật tài
                                        khoản của em.</p>
                                </div>
                            </div>
                            <button
                                class="px-5 py-2.5 bg-[var(--bg-app)] hover:bg-[var(--border-color)] text-[var(--text-primary)] text-[13px] font-bold rounded-xl border border-[var(--border-color)] transition-all">Bật
                                2FA</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import HomePageHeader from '@/layouts/HomePageHeader.vue'
import SettingNavInformation from '../components/SettingNavInformation.vue'

const isSaving = ref(false)
const passwords = reactive({ old: '', new: '', confirm: '' })
const showPass = reactive({ old: false, new: false, confirm: false })

const handleChangePassword = async () => {
    if (passwords.new !== passwords.confirm) return alert('Mật khẩu xác nhận không khớp!')
    isSaving.value = true
    await new Promise(resolve => setTimeout(resolve, 1500))
    isSaving.value = false
    alert('Đổi mật khẩu thành công!')
}
</script>