<template>
    <div class="sticky top-28 bg-[#1c1e24]/80 backdrop-blur-xl rounded-[24px] border border-white/10 shadow-2xl p-6">
        <div class="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
            <span class="text-gray-400 font-medium">Giá:</span>
            <span class="text-2xl font-extrabold text-white">{{ price }}</span>
        </div>

        <ul class="space-y-4 mb-8 text-[14px]">
            <li class="flex justify-between items-center pb-3 border-b border-white/5">
                <span class="text-gray-400"><i class="fa-solid fa-user-tie w-5"></i> Giảng viên</span>
                <a :href="`/giang-vien/${instructor.id}`" class="font-bold text-blue-400 hover:text-blue-300 transition-colors">
                    {{ instructor.name }}
                </a>
            </li>
            <li class="flex justify-between items-center pb-3 border-b border-white/5">
                <span class="text-gray-400"><i class="fa-solid fa-star w-5"></i> Đánh giá</span>
                <div class="text-yellow-500 text-[12px]">
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                </div>
            </li>
            <li class="flex justify-between items-center pb-3 border-b border-white/5">
                <span class="text-gray-400"><i class="fa-regular fa-clock w-5"></i> Thời lượng</span>
                <span class="font-medium text-white">10 Ngày</span>
            </li>
            <li class="flex justify-between items-center pb-3 border-b border-white/5">
                <span class="text-gray-400"><i class="fa-solid fa-book-open w-5"></i> Bài học</span>
                <span class="font-medium text-white">30 Bài</span>
            </li>
            <li class="flex justify-between items-center pb-3 border-b border-white/5">
                <span class="text-gray-400"><i class="fa-solid fa-certificate w-5"></i> Chứng chỉ</span>
                <span class="font-medium text-emerald-400">Có</span>
            </li>
            <li class="flex justify-between items-center">
                <span class="text-gray-400"><i class="fa-solid fa-infinity w-5"></i> Truy cập</span>
                <span class="font-medium text-white">Trọn đời</span>
            </li>
        </ul>

        <button class="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all shadow-[0_4px_15px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 mb-3">
            Đăng ký học ngay
        </button>
        <button class="w-full py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all flex items-center justify-center gap-2">
            <i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ hàng
        </button>

        <p class="text-center text-[12px] text-gray-500 mt-4">Cam kết hoàn tiền trong 7 ngày nếu không hài lòng.</p>
    </div>
</template>

<script setup>
defineProps({
    instructor: { type: Object, required: true },
    price: { type: String, default: '499.000đ' }
})
</script>