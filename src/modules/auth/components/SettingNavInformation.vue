<template>
    <nav class="flex flex-col py-2">
        <!-- Hồ sơ cá nhân -->
        <router-link 
            to="/thong-tin-tai-khoan"
            :class="[
                'flex items-center gap-3 px-6 py-3.5 font-medium text-[13px] transition-colors',
                isActive('/thong-tin-tai-khoan') 
                    ? 'bg-blue-500/10 text-blue-400 border-r-2 border-blue-500' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
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
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
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
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
            ]"
        >
            <i class="fa-regular fa-credit-card w-5 text-center text-[15px]"></i> Lịch sử thanh toán
        </router-link>
    </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

// Khởi tạo route để lấy thông tin đường dẫn hiện tại
const route = useRoute()

// Hàm kiểm tra xem đường dẫn hiện tại có khớp với menu hay không
const isActive = (path) => {
    // Sử dụng startsWith nếu muốn menu vẫn active khi ở các trang con (VD: /lich-su-thanh-toan/123)
    // Hoặc dùng === nếu chỉ muốn active khi khớp chính xác tuyệt đối
    return route.path === path
}
</script>