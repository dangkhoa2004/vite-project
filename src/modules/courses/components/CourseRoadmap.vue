<template>
    <div class="relative max-w-4xl mx-auto py-8">

        <div
            class="absolute left-[27px] sm:left-1/2 top-0 bottom-0 w-1 bg-[var(--border-color)] rounded-full transform sm:-translate-x-1/2">
            <div class="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                style="height: 50%;"></div>
        </div>

        <div class="space-y-12 relative">
            <div v-for="(node, index) in roadmapNodes" :key="node.id" :class="['relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 group',
                index % 2 === 0 ? 'sm:flex-row-reverse' : '']">

                <div
                    class="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-14 h-14 flex items-center justify-center z-10 shrink-0">
                    <div :class="['w-10 h-10 rounded-full flex items-center justify-center border-4 transition-all duration-500',
                        node.status === 'completed' ? 'bg-emerald-500 border-emerald-900/50 shadow-[0_0_20px_rgba(16,185,129,0.5)]' :
                            node.status === 'active' ? 'bg-blue-600 border-blue-900/50 shadow-[0_0_20px_rgba(37,99,235,0.6)] animate-pulse' :
                                'bg-[#1c1e24] border-white/10 text-gray-600']">
                        <i v-if="node.status === 'completed'"
                            class="fa-solid fa-check text-[var(--text-primary)] text-[14px]"></i>
                        <i v-else-if="node.status === 'active'"
                            class="fa-solid fa-code text-[var(--text-primary)] text-[12px]"></i>
                        <i v-else class="fa-solid fa-lock text-[12px]"></i>
                    </div>
                </div>

                <div class="hidden sm:block sm:w-1/2"></div>

                <div :class="['w-full sm:w-1/2 pl-16 sm:pl-0', index % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12']">
                    <div :class="['p-6 rounded-[24px] border backdrop-blur-xl transition-all duration-300',
                        node.status === 'completed' ? 'bg-emerald-500/5 border-emerald-500/20 hover:border-emerald-500/40' :
                            node.status === 'active' ? 'bg-[#1c1e24]/80 border-blue-500/40 shadow-[0_10px_30px_rgba(37,99,235,0.15)]' :
                                'bg-black/20 border-[var(--border-color)] opacity-60']">

                        <div class="flex items-center gap-2 mb-3">
                            <span
                                :class="['text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider',
                                    node.status === 'completed' ? 'bg-emerald-500/20 text-[var(--text-primary)]' :
                                        node.status === 'active' ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-gray-500']">
                                Bước {{ index + 1 }}
                            </span>
                            <span v-if="node.isRequired"
                                class="text-[10px] text-orange-400 bg-orange-400/10 px-2 py-1 rounded-md font-bold">Bắt
                                buộc</span>
                        </div>

                        <h3 :class="['text-lg font-bold mb-2 transition-colors duration-300',
                            node.status === 'locked' ? 'text-[var(--text-secondary)] opacity-60' : 'text-[var(--text-primary)]']">
                            {{ node.title }}
                        </h3>

                        <p
                            class="text-[13px] text-[var(--text-secondary)] mb-4 line-clamp-2 leading-relaxed transition-colors duration-300">
                            {{ node.description }}
                        </p>

                        <div v-if="node.prerequisites.length > 0"
                            class="mb-4 p-3 bg-black/40 rounded-xl border border-[var(--border-color)]">
                            <p class="text-[11px] text-gray-500 mb-1 font-semibold uppercase">Kiến thức tiên quyết:</p>
                            <div class="flex flex-wrap gap-2 mt-2">
                                <span v-for="(req, i) in node.prerequisites" :key="i"
                                    class="text-[11px] text-gray-300 bg-white/5 px-2 py-1 rounded-md border border-[var(--border-color)]">
                                    <i class="fa-solid fa-link text-[9px] mr-1 opacity-50"></i>{{ req }}
                                </span>
                            </div>
                        </div>

                        <button v-if="node.status !== 'locked'"
                            :class="['w-full py-2.5 rounded-xl text-[12px] font-bold transition-all flex justify-center items-center gap-2',
                                node.status === 'completed' ? 'bg-[var(--bg-card)] hover:bg-white/10 text-[var(--text-primary)]' : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg']">
                            {{ node.status === 'completed' ? 'Ôn tập lại' : 'Tiếp tục học' }}
                            <i class="fa-solid fa-arrow-right text-[11px]"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'

// Dữ liệu mẫu mô phỏng Roadmap trở thành Frontend Developer
const roadmapNodes = ref([
    {
        id: 1,
        title: 'HTML, CSS & JavaScript Cơ bản',
        description: 'Nắm vững nền tảng của Web, cách DOM hoạt động và xử lý logic với JS Vanilla.',
        status: 'completed',
        isRequired: true,
        prerequisites: []
    },
    {
        id: 2,
        title: 'Frontend hiện đại với Vue 3',
        description: 'Làm quen với Composition API, Component-based architecture và reactivity.',
        status: 'active',
        isRequired: true,
        prerequisites: ['JavaScript ES6+']
    },
    {
        id: 3,
        title: 'Quản lý State với Pinia & Router',
        description: 'Xây dựng ứng dụng Single Page Application (SPA) phức tạp với luồng dữ liệu chuẩn hóa.',
        status: 'locked',
        isRequired: true,
        prerequisites: ['Vue 3 Basics', 'Vue Components']
    },
    {
        id: 4,
        title: 'Tích hợp API & Đồ án thực tế',
        description: 'Kết nối Backend bằng Axios, xử lý Authentication (JWT) và deploy lên Vercel.',
        status: 'locked',
        isRequired: false,
        prerequisites: ['Vue Router', 'RESTful API Concept']
    }
])
</script>