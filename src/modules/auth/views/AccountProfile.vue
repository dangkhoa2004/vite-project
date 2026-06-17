<template>
    <HomePageHeader />
    <div class="min-h-screen bg-[var(--bg-app)] text-[var(--text-primary)] font-sans relative overflow-hidden pb-20 pt-28 transition-colors duration-300">
        <div class="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0"></div>

        <main class="relative z-10 max-w-7xl mx-auto px-6">
            <div class="mb-10">
                <h1 class="text-3xl font-extrabold text-[var(--text-primary)] tracking-tight mb-2">Cài đặt tài khoản</h1>
                <p class="text-sm text-[var(--text-secondary)]">Quản lý thông tin cá nhân, định hình thương hiệu cá nhân của bạn.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 items-start">
                
                <aside class="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[24px] border border-[var(--border-color)] overflow-hidden sticky top-28 shadow-xl">
                    <div class="p-6 border-b border-[var(--border-color)] flex items-center gap-4">
                        <img v-if="userInfo.avatar" :src="userInfo.avatar" class="w-12 h-12 rounded-full object-cover border border-[var(--border-color)]" />
                        <div v-else class="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            {{ userInfo.name.charAt(0) }}
                        </div>
                        <div class="overflow-hidden">
                            <h3 class="text-[15px] font-bold text-[var(--text-primary)] truncate">{{ userInfo.name }}</h3>
                            <p class="text-[12px] text-[var(--text-secondary)] truncate">{{ userInfo.role }}</p>
                        </div>
                    </div>
                    <SettingNavInformation />
                </aside>

                <div class="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[24px] border border-[var(--border-color)] p-8 shadow-xl">
                    <div class="flex flex-col md:flex-row md:items-center justify-between border-b border-[var(--border-color)] pb-6 mb-8 gap-4">
                        <div>
                            <h2 class="text-xl font-bold text-[var(--text-primary)] mb-1">Hồ sơ cá nhân</h2>
                            <p class="text-[13px] text-[var(--text-secondary)]">Xây dựng Portfolio của bạn để gây ấn tượng với nhà tuyển dụng.</p>
                        </div>
                        <button class="px-5 py-2.5 bg-[var(--bg-app)] hover:bg-blue-600 text-[var(--text-secondary)] hover:text-white text-[12px] font-bold rounded-xl border border-[var(--border-color)] hover:border-transparent transition-all shrink-0 flex items-center gap-2">
                            <i class="fa-regular fa-eye"></i> Xem hồ sơ public
                        </button>
                    </div>

                    <form @submit.prevent="handleSaveProfile" class="flex flex-col gap-8">
                        <div class="flex flex-col sm:flex-row items-center gap-6">
                            <div class="relative group cursor-pointer shrink-0">
                                <div class="w-24 h-24 rounded-full border-4 border-[var(--bg-app)] shadow-md overflow-hidden bg-[var(--bg-app)] flex items-center justify-center relative">
                                    <img v-if="userInfo.avatar" :src="userInfo.avatar" class="w-full h-full object-cover" />
                                    <span v-else class="text-3xl font-bold text-[var(--text-secondary)]">{{ userInfo.name.charAt(0) }}</span>
                                    <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <i class="fa-solid fa-camera text-white"></i>
                                    </div>
                                </div>
                                <input type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*" @change="handleAvatarUpload" />
                            </div>
                            <div class="text-center sm:text-left">
                                <h4 class="text-[14px] font-bold text-[var(--text-primary)] mb-1">Ảnh đại diện</h4>
                                <p class="text-[12px] text-[var(--text-secondary)] mb-3">Định dạng JPG, PNG. Tối đa 2MB.</p>
                                <button type="button" class="px-4 py-1.5 bg-[var(--bg-app)] border border-[var(--border-color)] hover:border-blue-500 text-[12px] font-medium rounded-lg transition-colors">Đổi ảnh mới</button>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="flex flex-col gap-1.5">
                                <label class="text-[12px] font-bold uppercase tracking-wider text-[var(--text-secondary)] ml-1">Họ và tên</label>
                                <input v-model="userInfo.name" type="text" class="w-full h-11 px-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-app)] text-[13px] outline-none focus:border-blue-500 transition-all" />
                            </div>
                            <div class="flex flex-col gap-1.5">
                                <label class="text-[12px] font-bold uppercase tracking-wider text-[var(--text-secondary)] ml-1">Chức danh (Headline)</label>
                                <input v-model="userInfo.role" type="text" placeholder="VD: Sinh viên CNTT, Fullstack Dev..." class="w-full h-11 px-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-app)] text-[13px] outline-none focus:border-blue-500 transition-all" />
                            </div>

                            <div class="flex flex-col gap-1.5">
                                <div class="flex justify-between items-center px-1">
                                    <label class="text-[12px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">Số điện thoại</label>
                                    <label class="flex items-center gap-2 cursor-pointer tooltip" title="Chỉ hiển thị cho giảng viên và hệ thống">
                                        <span class="text-[10px] text-[var(--text-secondary)]">Công khai:</span>
                                        <input type="checkbox" v-model="userInfo.privacy.phone" class="w-8 h-4 rounded-full appearance-none bg-[var(--border-color)] checked:bg-blue-500 relative transition-colors before:content-[''] before:absolute before:top-0.5 before:left-0.5 before:w-3 before:h-3 before:bg-white before:rounded-full before:transition-transform checked:before:translate-x-4">
                                    </label>
                                </div>
                                <input v-model="userInfo.phone" type="tel" class="w-full h-11 px-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-app)] text-[13px] outline-none focus:border-blue-500 transition-all" />
                            </div>

                            <div class="flex flex-col gap-1.5">
                                <div class="flex justify-between items-center px-1">
                                    <label class="text-[12px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">Email</label>
                                    <label class="flex items-center gap-2 cursor-pointer">
                                        <span class="text-[10px] text-[var(--text-secondary)]">Công khai:</span>
                                        <input type="checkbox" v-model="userInfo.privacy.email" class="w-8 h-4 rounded-full appearance-none bg-[var(--border-color)] checked:bg-blue-500 relative transition-colors before:content-[''] before:absolute before:top-0.5 before:left-0.5 before:w-3 before:h-3 before:bg-white before:rounded-full before:transition-transform checked:before:translate-x-4">
                                    </label>
                                </div>
                                <input v-model="userInfo.email" disabled class="w-full h-11 px-4 rounded-xl border border-[var(--border-color)] bg-[var(--border-color)]/30 text-[13px] text-[var(--text-secondary)] cursor-not-allowed" />
                            </div>
                        </div>

                        <div class="flex flex-col gap-1.5">
                            <label class="text-[12px] font-bold uppercase tracking-wider text-[var(--text-secondary)] ml-1">Giới thiệu bản thân (Bio)</label>
                            <textarea v-model="userInfo.bio" rows="3" placeholder="Viết vài dòng giới thiệu về bản thân, mục tiêu học tập..." class="w-full p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-app)] text-[13px] outline-none focus:border-blue-500 transition-all resize-none"></textarea>
                        </div>

                        <div class="flex flex-col gap-1.5 border-t border-[var(--border-color)] pt-6">
                            <label class="text-[12px] font-bold uppercase tracking-wider text-[var(--text-primary)] ml-1 flex items-center gap-2"><i class="fa-solid fa-wand-magic-sparkles text-purple-500"></i> Kỹ năng chuyên môn</label>
                            <p class="text-[11px] text-[var(--text-secondary)] ml-1 mb-2">Thêm tối đa 10 kỹ năng để làm nổi bật hồ sơ của bạn (Nhập và nhấn Enter).</p>
                            
                            <div class="w-full min-h-11 p-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-app)] focus-within:border-blue-500 transition-all flex flex-wrap gap-2 items-center">
                                <span v-for="(skill, idx) in userInfo.skills" :key="idx" class="px-2.5 py-1 bg-[var(--bg-card)] border border-[var(--border-color)] text-[12px] rounded-lg flex items-center gap-1.5 group">
                                    {{ skill }}
                                    <i @click="removeSkill(idx)" class="fa-solid fa-xmark text-[10px] text-[var(--text-secondary)] hover:text-red-500 cursor-pointer"></i>
                                </span>
                                <input type="text" v-model="skillInput" @keyup.enter="addSkill" @keydown.prevent.enter placeholder="VD: Vue.js, Docker..." class="flex-1 bg-transparent outline-none text-[13px] min-w-[120px] px-2 h-7" />
                            </div>
                        </div>

                        <div class="flex flex-col gap-4 border-t border-[var(--border-color)] pt-6">
                            <label class="text-[12px] font-bold uppercase tracking-wider text-[var(--text-primary)] ml-1 flex items-center gap-2"><i class="fa-solid fa-link text-blue-500"></i> Liên kết & Mạng xã hội</label>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="relative">
                                    <i class="fa-brands fa-github absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-primary)]"></i>
                                    <input v-model="userInfo.socials.github" type="text" placeholder="github.com/username" class="w-full h-11 pl-10 pr-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-app)] text-[13px] outline-none focus:border-blue-500" />
                                </div>
                                <div class="relative">
                                    <i class="fa-brands fa-linkedin absolute left-4 top-1/2 -translate-y-1/2 text-[#0A66C2]"></i>
                                    <input v-model="userInfo.socials.linkedin" type="text" placeholder="linkedin.com/in/username" class="w-full h-11 pl-10 pr-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-app)] text-[13px] outline-none focus:border-blue-500" />
                                </div>
                                <div class="relative md:col-span-2">
                                    <i class="fa-solid fa-globe absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]"></i>
                                    <input v-model="userInfo.socials.website" type="text" placeholder="Website cá nhân / Portfolio URL" class="w-full h-11 pl-10 pr-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-app)] text-[13px] outline-none focus:border-blue-500" />
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center justify-end pt-6 border-t border-[var(--border-color)]">
                            <button type="submit" :disabled="isSaving" class="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-bold rounded-xl shadow-md transition-all disabled:opacity-70 flex items-center gap-2">
                                <i v-if="isSaving" class="fa-solid fa-circle-notch fa-spin"></i>
                                {{ isSaving ? 'Đang lưu...' : 'Lưu thay đổi hồ sơ' }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import HomePageHeader from '@/layouts/HomePageHeader.vue'
import SettingNavInformation from '../components/SettingNavInformation.vue'

const isSaving = ref(false)
const skillInput = ref('')

// Dữ liệu User mở rộng
const userInfo = ref({
    name: 'Cao Đăng Khoa', email: 'caodangkhoa.dev@gmail.com', phone: '0388.375.154',
    role: 'Fullstack Developer', avatar: '',
    bio: 'Sinh viên IT. Có kinh nghiệm làm việc với hệ sinh thái Node.js, Vue 3.',
    privacy: { phone: false, email: true }, // Toggles
    skills: ['Vue.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'], // Skill Tags
    socials: { github: '', linkedin: '', website: 'https://caodangkhoa.dev' } // Links
})

const handleAvatarUpload = (e) => {
    const file = e.target.files[0]
    if (file) userInfo.value.avatar = URL.createObjectURL(file)
}

const addSkill = () => {
    const skill = skillInput.value.trim()
    if (skill && !userInfo.value.skills.includes(skill) && userInfo.value.skills.length < 10) {
        userInfo.value.skills.push(skill)
    }
    skillInput.value = ''
}

const removeSkill = (idx) => userInfo.value.skills.splice(idx, 1)

const handleSaveProfile = async () => {
    isSaving.value = true
    await new Promise(r => setTimeout(r, 1000)) // Giả lập API
    alert('Đã cập nhật hồ sơ thành công!')
    isSaving.value = false
}
</script>