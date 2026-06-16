<template>
    <HomePageHeader />
    <div class="min-h-screen bg-[var(--bg-app)] py-12 px-4 transition-colors duration-300">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-3xl font-bold text-[var(--text-primary)] mb-8 flex items-center gap-3">
                <i class="fa-solid fa-cart-shopping text-blue-500"></i>
                Giỏ hàng của em
            </h1>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="lg:col-span-2 space-y-4">
                    <div v-for="item in cartItems" :key="item.id"
                        class="bg-[var(--bg-card)] p-4 rounded-2xl border border-[var(--border-color)] flex items-center gap-4 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
                        <img :src="item.image" class="w-20 h-20 rounded-xl object-cover shadow-sm" />
                        <div class="flex-1">
                            <h3 class="font-bold text-[var(--text-primary)] text-lg">{{ item.name }}</h3>
                            <p class="text-sm font-semibold text-blue-500">{{ item.price }}đ</p>
                        </div>
                        <button
                            class="text-[var(--text-secondary)] hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-red-500/10">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>

                <div
                    class="bg-[var(--bg-card)] p-6 rounded-3xl border border-[var(--border-color)] shadow-xl shadow-black/5 h-fit sticky top-24">
                    <h2 class="font-bold text-[var(--text-primary)] mb-6 text-xl">Thông tin thanh toán</h2>

                    <div class="space-y-4 mb-8">
                        <div class="flex justify-between text-[var(--text-secondary)]">
                            <span>Tạm tính</span>
                            <span class="text-[var(--text-primary)] font-medium">1.000.000đ</span>
                        </div>
                        <div class="flex justify-between text-[var(--text-secondary)]">
                            <span>Phí dịch vụ</span>
                            <span class="text-green-500 font-medium">Miễn phí</span>
                        </div>
                        <div class="border-t border-[var(--border-color)] pt-4 flex justify-between items-center">
                            <span class="font-bold text-[var(--text-primary)]">Tổng cộng</span>
                            <span class="text-2xl font-black text-blue-500">1.000.000đ</span>
                        </div>
                    </div>

                    <button
                        class="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2">
                        <i class="fa-solid fa-credit-card"></i>
                        Thanh toán ngay
                    </button>
                </div>
            </div>
        </div>
    </div>
    <HomePageFooter />
</template>

<script setup>
import { ref } from 'vue';
import HomePageHeader from '../../../layouts/HomePageHeader.vue';
import HomePageFooter from '../../../layouts/HomePageFooter.vue';

const cartItems = ref([
    { id: 1, name: 'Khóa học Vue 3 Pro', price: '500.000', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Khóa học Tailwind CSS', price: '500.000', image: 'https://via.placeholder.com/150' }
]);
</script>