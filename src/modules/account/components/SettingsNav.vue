<template>
    <nav class="flex flex-col py-2">
        <!-- Hồ sơ cá nhân -->
        <router-link 
            to="/thong-tin-tai-khoan"
            :class="[
                'flex items-center gap-3 px-6 py-3.5 font-medium text-[13px] transition-colors',
                isActive('/thong-tin-tai-khoan') 
                    ? 'bg-blue-500/10 text-blue-400 border-r-2 border-blue-500' 
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5'
            ]"
        >
            <i class="fa-regular fa-user w-5 text-center text-[15px]"></i> Hồ sơ cá nhân
        </router-link>

        <!-- Bảo mật & Mật khẩu -->
        <router-link 
            to="/cai-dat-bao-mat"
            :class="[
                'flex items-center gap-3 px-6 py-3.5 font-medium text-[13px] transition-colors',
                isActive('/cai-dat-bao-mat') 
                    ? 'bg-blue-500/10 text-blue-400 border-r-2 border-blue-500' 
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5'
            ]"
        >
            <i class="fa-solid fa-shield-halved w-5 text-center text-[15px]"></i> Bảo mật & Mật khẩu
        </router-link>

        <!-- Lịch sử thanh toán -->
        <router-link 
            to="/lich-su-thanh-toan"
            :class="[
                'flex items-center gap-3 px-6 py-3.5 font-medium text-[13px] transition-colors',
                isActive('/lich-su-thanh-toan') 
                    ? 'bg-blue-500/10 text-blue-400 border-r-2 border-blue-500' 
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5'
            ]"
        >
            <i class="fa-regular fa-credit-card w-5 text-center text-[15px]"></i> Lịch sử thanh toán
        </router-link>
    </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const isActive = (path) => {
    return route.path === path
}
</script>