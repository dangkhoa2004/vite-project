<template>
    <HomePageHeader />

    <div class="min-h-screen bg-[var(--bg-app)] text-[var(--text-primary)] font-sans pb-20 pt-28 px-4">
        <div class="max-w-6xl mx-auto">

            <div class="flex items-center justify-center mb-16 px-4">
                <div class="flex items-center gap-2 text-blue-600 font-bold">
                    <div class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">1</div>
                    <span>Giỏ hàng</span>
                </div>
                <div class="w-32 h-0.5 bg-[var(--border-color)] mx-4"></div>
                <div class="flex items-center gap-2 text-[var(--text-secondary)]">
                    <div
                        class="w-8 h-8 rounded-full bg-[var(--border-color)] text-white flex items-center justify-center">
                        2</div>
                    <span>Xác nhận</span>
                </div>
                <div class="w-32 h-0.5 bg-[var(--border-color)] mx-4"></div>
                <div class="flex items-center gap-2 text-[var(--text-secondary)]">
                    <div
                        class="w-8 h-8 rounded-full bg-[var(--border-color)] text-white flex items-center justify-center">
                        3</div>
                    <span>Thanh toán</span>
                </div>
            </div>

            <div v-if="cartItems.length === 0" class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div
                    class="lg:col-span-8 flex flex-col items-center justify-center py-10 bg-[var(--bg-card)] rounded-3xl border border-[var(--border-color)]">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-4816550-4019973.png"
                        class="w-64 mb-6 opacity-80" alt="Empty Cart" />
                    <h2 class="text-2xl font-bold">Giỏ hàng trống!</h2>
                    <p class="text-[var(--text-secondary)] mt-2">
                        Thêm sản phẩm vào giỏ và quay lại trang này để thanh
                        toán nha bạn </p>
                    <button @click="$router.push('/')"
                        class="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all">
                        Tiếp tục mua sắm
                    </button>
                </div>

                <div class="lg:col-span-4 space-y-4">
                    <div class="bg-[var(--bg-card)] p-6 rounded-2xl border border-[var(--border-color)] space-y-6">
                        <button type="button" @click="openPromoPopup('referral')"
                            class="w-full text-left flex items-center justify-between rounded-2xl px-4 py-4 hover:text-blue-500 transition-colors">
                            <span class="font-medium">Bạn có mã giới thiệu?</span>
                            <i class="fa-solid fa-user"></i>
                        </button>
                        <button type="button" @click="openPromoPopup('discount')"
                            class="w-full text-left flex items-center justify-between rounded-2xl px-4 py-4 hover:text-blue-500 transition-colors">
                            <span class="font-medium">Bạn có mã ưu đãi?</span>
                            <i class="fa-solid fa-percent"></i>
                        </button>
                        <button type="button" @click="openPromoPopup('gift')"
                            class="w-full text-left flex items-center justify-between rounded-2xl px-4 py-4 hover:text-blue-500 transition-colors">
                            <span class="font-medium">Bạn muốn tặng cho bạn bè?</span>
                            <i class="fa-solid fa-gift"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div class="lg:col-span-8 space-y-4">
                    <div v-for="item in cartItems" :key="item.id"
                        class="rounded-[28px] border border-[var(--border-color)] bg-[var(--bg-card)] p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 lg:p-5">
                        <div class="grid gap-4 lg:grid-cols-[280px_minmax(0,_1fr)_220px] lg:gap-5">
                            <div
                                class="relative overflow-hidden rounded-[24px] border border-[var(--border-color)] bg-white">
                                <img :src="item.image" :alt="item.name"
                                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                                <div
                                    class="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black px-3 py-1 text-[11px] font-semibold text-[var(--text-primary)] shadow-sm">
                                    <div class="flex items-center text-yellow-500 text-[11px] gap-0.5">
                                        <i class="fa-solid fa-star"></i>
                                        <span class="text-white font-bold ml-1">{{ item.rating }}</span>
                                        <span class="text-white ml-1">({{ item.reviews }})</span>
                                    </div>
                                </div>
                                <button
                                    class="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-black/20 hover:bg-rose-500 backdrop-blur-md rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all z-20">
                                    <i class="fa-regular fa-heart text-[13px]"></i>
                                </button>
                            </div>

                            <div class="flex flex-col justify-between">
                                <div>
                                    <div class="mb-3 flex flex-wrap gap-2">
                                        <span
                                            class="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                                            {{ item.badge }}
                                        </span>
                                        <span
                                            class="rounded-full border border-[var(--border-color)] bg-[var(--border-color)]/80 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                                            {{ item.level }}
                                        </span>
                                    </div>

                                    <a :href="`/chi-tiet-khoa-hoc`"
                                        class="text-lg font-bold text-[var(--text-primary)] leading-tight mb-2 line-clamp-2">
                                        {{ item.name }}
                                    </a>
                                    <p class="text-sm leading-6 text-[var(--text-secondary)] line-clamp-2">
                                        {{ item.description }}
                                    </p>

                                    <div
                                        class="mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                                        <span v-for="tag in item.tags" :key="tag"
                                            class="rounded-full bg-[var(--border-color)] px-2.5 py-1">
                                            {{ tag }}
                                        </span>
                                    </div>
                                </div>

                                <div class="mt-5 flex items-center gap-3 text-[13px] text-[var(--text-secondary)]">
                                    <img :src="item.instructor.avatar"
                                        class="h-8 w-8 rounded-full object-cover border border-[var(--border-color)]" />
                                    <div>
                                        <p class="text-sm font-semibold text-[var(--text-primary)]">{{
                                            item.instructor.name }}</p>
                                        <p class="text-xs text-[var(--text-secondary)]">{{ item.students }} học viên</p>
                                    </div>
                                </div>
                            </div>

                            <div
                                class="flex min-w-[220px] flex-col justify-between rounded-[24px] border border-[var(--border-color)] bg-[var(--bg-app)] p-4">
                                <div class="space-y-2 text-right">
                                    <p class="text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">Giá
                                        sản phẩm</p>
                                    <p class="text-sm line-through text-[var(--text-secondary)]">{{
                                        formatPrice(item.originalPrice) }}</p>
                                    <p class="text-2xl font-extrabold text-blue-600">{{ formatPrice(item.price) }}</p>
                                    <span class="text-sm font-semibold text-emerald-500">{{ item.discountLabel }}</span>
                                </div>
                                <div class="mt-5 grid gap-3">
                                    <button
                                        class="rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
                                        Đặt mua
                                    </button>
                                    <button
                                        class="rounded-2xl border border-red-500 px-4 py-3 text-sm font-semibold text-red-500 hover:bg-red-50 transition-colors">
                                        Xóa
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-4 space-y-4">
                    <div class="bg-[var(--bg-card)] p-6 rounded-2xl border border-[var(--border-color)] space-y-6">
                        <button type="button" @click="openPromoPopup('referral')"
                            class="w-full text-left flex items-center justify-between rounded-2xl px-4 py-4 hover:text-blue-500 transition-colors">
                            <span class="font-medium">Bạn có mã giới thiệu?</span>
                            <i class="fa-solid fa-user"></i>
                        </button>
                        <button type="button" @click="openPromoPopup('discount')"
                            class="w-full text-left flex items-center justify-between rounded-2xl px-4 py-4 hover:text-blue-500 transition-colors">
                            <span class="font-medium">Bạn có mã ưu đãi?</span>
                            <i class="fa-solid fa-percent"></i>
                        </button>
                        <button type="button" @click="openPromoPopup('gift')"
                            class="w-full text-left flex items-center justify-between rounded-2xl px-4 py-4 hover:text-blue-500 transition-colors">
                            <span class="font-medium">Bạn muốn tặng cho bạn bè?</span>
                            <i class="fa-solid fa-gift"></i>
                        </button>
                    </div>
                    <div class="bg-[var(--bg-card)] p-6 rounded-2xl border border-[var(--border-color)]">
                        <h3 class="text-lg font-semibold mb-4">Tổng đơn hàng</h3>
                        <div class="flex justify-between mb-3 text-sm text-[var(--text-secondary)]">
                            <span>Tạm tính</span>
                            <span>{{ formatPrice(subTotal) }}</span>
                        </div>
                        <div class="flex justify-between mb-4 text-sm text-[var(--text-secondary)]">
                            <span>Phí</span>
                            <span>Miễn phí</span>
                        </div>
                        <div
                            class="border-t border-[var(--border-color)] pt-4 font-semibold text-lg flex justify-between">
                            <span>Tổng cộng</span>
                            <span>{{ formatPrice(subTotal) }}</span>
                        </div>
                        <button
                            class="mt-6 w-full rounded-xl bg-blue-600 px-4 py-3 text-white font-bold hover:bg-blue-700 transition-colors">
                            Tiến hành thanh toán
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Payment Methods -->
    <PaymentMethods />

    <transition name="fade">
        <div v-if="activePopup" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6">
            <div
                class="w-full max-w-md rounded-3xl bg-[var(--bg-card)] p-6 shadow-2xl border border-[var(--border-color)]">
                <div class="flex items-start justify-between gap-4">
                    <div>
                        <h2 class="text-xl font-semibold">{{ popupTitle }}</h2>
                        <p class="mt-2 text-sm text-[var(--text-secondary)]">{{ popupDescription }}</p>
                    </div>
                    <button type="button" @click="closePromoPopup"
                        class="rounded-full p-2 text-[var(--text-secondary)] hover:bg-[var(--border-color)] transition-colors">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div class="mt-6 space-y-4">
                    <input v-model="promoInput" :placeholder="popupPlaceholder"
                        class="w-full rounded-2xl border border-[var(--border-color)] bg-[var(--bg-app)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                    <div class="flex justify-end gap-3">
                        <button type="button" @click="closePromoPopup"
                            class="rounded-2xl border border-[var(--border-color)] px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--border-color)] transition-colors">
                            Hủy
                        </button>
                        <button type="button" @click="applyPromo"
                            class="rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
                            Áp dụng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>

    <HomePageFooter />
</template>

<script setup>
import { computed, ref } from 'vue';
import HomePageHeader from '@/layouts/HomePageHeader.vue';
import HomePageFooter from '@/layouts/HomePageFooter.vue';
import PaymentMethods from '../components/PaymentMethods.vue';
const cartItems = ref([
    {
        id: 1,
        name: 'Cơ sở dữ liệu PostgreSQL & Tối ưu hóa truy vấn',
        price: '450.000',
        originalPrice: '585.000',
        badge: 'Nâng cao',
        level: 'Nâng cao',
        discountLabel: '-23%',
        description: 'Thiết kế chuẩn hóa cơ sở dữ liệu, tối ưu hóa các câu lệnh query phức tạp và phân vùng bảng lớn.',
        tags: ['PostgreSQL', 'Docker'],
        rating: 4.5,
        reviews: 120,
        instructor: { name: 'Văn Toàn', avatar: 'https://via.placeholder.com/80' },
        students: 620,
        image: 'https://uploads.teachablecdn.com/attachments/eHsFVpGVQGWJ4elLNPen_vue-3-the-complete-guide.jpg'
    },
    {
        id: 2,
        name: 'Khóa học Tailwind CSS từ cơ bản đến nâng cao',
        price: '500.000',
        originalPrice: '620.000',
        badge: 'Bán chạy',
        level: 'Trung cấp',
        discountLabel: '-19%',
        description: 'Học cách xây dựng giao diện nhanh, responsive và tương tác với Tailwind CSS.',
        tags: ['CSS', 'Tailwind'],
        rating: 4.8,
        reviews: 200,
        instructor: { name: 'Minh Anh', avatar: 'https://via.placeholder.com/80' },
        students: 480,
        image: 'https://th.bing.com/th/id/R.e7a8101b92dcc405926fe03e988046c5?rik=f%2bFlwRkOy%2bfUQg&pid=ImgRaw&r=0'
    }
]);

const activePopup = ref('');
const promoInput = ref('');

const popupTitle = computed(() => {
    if (activePopup.value === 'referral') return 'Mã giới thiệu';
    if (activePopup.value === 'discount') return 'Mã ưu đãi';
    if (activePopup.value === 'gift') return 'Tặng cho bạn bè';
    return '';
});

const popupDescription = computed(() => {
    if (activePopup.value === 'referral') return 'Nhập mã giới thiệu để nhận ưu đãi.';
    if (activePopup.value === 'discount') return 'Nhập mã giảm giá của bạn ở đây.';
    if (activePopup.value === 'gift') return 'Nhập email bạn bè để gửi quà.';
    return '';
});

const popupPlaceholder = computed(() => {
    if (activePopup.value === 'referral') return 'Nhập mã giới thiệu';
    if (activePopup.value === 'discount') return 'Nhập mã giảm giá';
    if (activePopup.value === 'gift') return 'Nhập email người nhận';
    return '';
});

const openPromoPopup = (type) => {
    activePopup.value = type;
    promoInput.value = '';
};

const closePromoPopup = () => {
    activePopup.value = '';
    promoInput.value = '';
};

const applyPromo = () => {
    if (!promoInput.value.trim()) {
        return;
    }
    // TODO: xử lý mã ở đây, hiện tại chỉ đóng popup
    closePromoPopup();
};

const subTotal = computed(() => {
    return cartItems.value.reduce((sum, item) => {
        const normalizedPrice = Number(String(item.price).replace(/\./g, '')) || 0;
        return sum + normalizedPrice;
    }, 0);
});

const formatPrice = (value) => {
    const number = Number(String(value).replace(/\./g, '').replace(/,/g, '')) || 0;
    return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 });
};
</script>