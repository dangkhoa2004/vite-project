<template>
    <HomePageHeader />

    <div class="min-h-screen bg-[var(--bg-app)] text-[var(--text-primary)] font-sans pb-20 pt-28 px-4">
        <div class="max-w-6xl mx-auto">

            <div class="flex items-center justify-center mb-16 px-4">
                <div class="flex items-center gap-2 text-blue-600 font-bold">
                    <div
                        class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                        1</div>
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

            <div v-if="cartItems.length === 0" class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div
                    class="lg:col-span-8 flex flex-col items-center justify-center py-16 bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[20px] border border-[var(--border-color)]">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-4816550-4019973.png"
                        class="w-64 mb-6 opacity-80 drop-shadow-sm" alt="Empty Cart" />
                    <h2 class="text-2xl font-bold">Giỏ hàng trống!</h2>
                    <p class="text-[13px] text-[var(--text-secondary)] mt-2">
                        Thêm sản phẩm vào giỏ và quay lại trang này để thanh toán nha bạn
                    </p>
                    <button @click="$router.push('/')"
                        class="mt-8 bg-blue-600 hover:bg-blue-500 text-white px-8 h-11 rounded-xl font-bold transition-all shadow-md flex items-center gap-2">
                        Tiếp tục mua sắm
                    </button>
                </div>

                <div class="lg:col-span-4 space-y-4">
                    <div
                        class="bg-[var(--bg-card)]/60 backdrop-blur-md p-5 rounded-[20px] border border-[var(--border-color)] space-y-2 hover:border-blue-500/30 transition-all duration-300">
                        <button type="button" @click="openPromoPopup('referral')"
                            class="w-full text-left flex items-center justify-between rounded-xl px-4 py-3 hover:bg-[var(--bg-app)] hover:text-blue-500 transition-colors text-[13px]">
                            <span class="font-medium">Bạn có mã giới thiệu?</span>
                            <i class="fa-solid fa-user text-[var(--text-secondary)]"></i>
                        </button>
                        <button type="button" @click="openPromoPopup('discount')"
                            class="w-full text-left flex items-center justify-between rounded-xl px-4 py-3 hover:bg-[var(--bg-app)] hover:text-blue-500 transition-colors text-[13px]">
                            <span class="font-medium">Bạn có mã ưu đãi?</span>
                            <i class="fa-solid fa-percent text-[var(--text-secondary)]"></i>
                        </button>
                        <button type="button" @click="openPromoPopup('gift')"
                            class="w-full text-left flex items-center justify-between rounded-xl px-4 py-3 hover:bg-[var(--bg-app)] hover:text-blue-500 transition-colors text-[13px]">
                            <span class="font-medium">Bạn muốn tặng cho bạn bè?</span>
                            <i class="fa-solid fa-gift text-[var(--text-secondary)]"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div v-else class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                <div class="lg:col-span-8 space-y-5">
                    <div v-for="item in cartItems" :key="item.id"
                        class="group flex flex-col md:flex-row bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[20px] border border-[var(--border-color)] overflow-hidden hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgba(59,130,246,0.08)] transition-all duration-300 p-4 gap-6">

                        <div
                            class="rounded-xl overflow-hidden shrink-0 relative border border-[var(--border-color)] transform-gpu bg-[var(--bg-app)] w-full md:w-64 h-40 md:h-auto">
                            <img :src="item.image" :alt="item.name"
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />

                            <div
                                class="absolute top-2 left-2 inline-flex items-center gap-1.5 rounded bg-black/60 backdrop-blur-md px-2 py-1 text-[10px] font-semibold shadow-sm z-20">
                                <i class="fa-solid fa-star text-yellow-500 text-[9px]"></i>
                                <span class="text-white font-bold">{{ item.rating }}</span>
                                <span class="text-gray-300">({{ item.reviews }})</span>
                            </div>

                            <button
                                class="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-black/20 hover:bg-rose-500 backdrop-blur-md rounded-full text-white hover:text-white transition-all z-20">
                                <i class="fa-regular fa-heart text-[13px]"></i>
                            </button>
                        </div>

                        <div class="flex-1 flex flex-col justify-between min-w-0 py-1">
                            <div>
                                <div class="flex flex-wrap items-center gap-2 mb-2">
                                    <span
                                        class="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white bg-blue-600 rounded shadow-sm">
                                        {{ item.badge }}
                                    </span>
                                    <span
                                        class="text-[10px] font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                                        {{ item.level }}
                                    </span>
                                </div>

                                <a :href="`/chi-tiet-khoa-hoc`"
                                    class="text-[15px] font-bold text-[var(--text-primary)] mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                                    {{ item.name }}
                                </a>

                                <p class="text-[12px] text-[var(--text-secondary)] line-clamp-2 leading-relaxed mb-3">
                                    {{ item.description }}
                                </p>

                                <div class="flex flex-wrap gap-1.5 mb-3">
                                    <span v-for="tag in item.tags" :key="tag"
                                        class="text-[9px] text-[var(--text-secondary)] bg-[var(--border-color)] border border-[var(--border-color)] px-1.5 py-0.5 rounded">
                                        {{ tag }}
                                    </span>
                                </div>
                            </div>

                            <div
                                class="flex items-center gap-3 text-[11px] text-[var(--text-secondary)] pt-3 border-t border-[var(--border-color)]">
                                <img :src="item.instructor.avatar"
                                    class="w-6 h-6 rounded-full object-cover border border-[var(--border-color)]" />
                                <span class="font-medium text-[var(--text-primary)]">{{ item.instructor.name }}</span>
                                <span class="w-1 h-1 rounded-full bg-[var(--border-color)]"></span>
                                <span title="Học viên" class="flex items-center gap-1.5">
                                    <i class="fa-solid fa-users text-[10px]"></i> {{ item.students }}
                                </span>
                            </div>
                        </div>

                        <div
                            class="flex flex-row md:flex-col justify-between items-center md:items-end md:justify-center md:pl-5 md:border-l border-[var(--border-color)] gap-3 md:w-40 shrink-0">
                            <div class="flex flex-col text-left md:text-right w-full">
                                <span class="text-[11px] text-[var(--text-secondary)] line-through mb-0.5">{{
                                    formatPrice(item.originalPrice) }}</span>
                                <div class="flex items-center md:justify-end gap-2">
                                    <span class="text-[15px] font-extrabold tracking-wide text-blue-600 leading-none">{{
                                        formatPrice(item.price) }}</span>
                                </div>
                                <span class="text-[10px] font-semibold text-emerald-500 mt-1 inline-block">{{
                                    item.discountLabel }}</span>
                            </div>

                            <div class="flex gap-2 mt-2 w-full md:w-auto">
                                <button title="Xóa khỏi giỏ"
                                    class="w-9 h-9 flex items-center justify-center bg-[var(--bg-app)] hover:bg-red-500 text-[var(--text-secondary)] hover:text-white rounded-xl border border-[var(--border-color)] transition-colors">
                                    <i class="fa-solid fa-trash-can text-[13px]"></i>
                                </button>
                                <button
                                    class="flex-1 px-4 h-9 bg-blue-600 hover:bg-blue-500 text-white text-[12px] font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5">
                                    Mua ngay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-4 space-y-5">
                    <div
                        class="bg-[var(--bg-card)]/60 backdrop-blur-md p-5 rounded-[20px] border border-[var(--border-color)] space-y-2 hover:border-blue-500/30 transition-all duration-300">
                        <button type="button" @click="openPromoPopup('referral')"
                            class="w-full text-left flex items-center justify-between rounded-xl px-4 py-3 hover:bg-[var(--bg-app)] hover:text-blue-500 transition-colors text-[13px]">
                            <span class="font-medium">Bạn có mã giới thiệu?</span>
                            <i class="fa-solid fa-user text-[var(--text-secondary)]"></i>
                        </button>
                        <button type="button" @click="openPromoPopup('discount')"
                            class="w-full text-left flex items-center justify-between rounded-xl px-4 py-3 hover:bg-[var(--bg-app)] hover:text-blue-500 transition-colors text-[13px]">
                            <span class="font-medium">Bạn có mã ưu đãi?</span>
                            <i class="fa-solid fa-percent text-[var(--text-secondary)]"></i>
                        </button>
                        <button type="button" @click="openPromoPopup('gift')"
                            class="w-full text-left flex items-center justify-between rounded-xl px-4 py-3 hover:bg-[var(--bg-app)] hover:text-blue-500 transition-colors text-[13px]">
                            <span class="font-medium">Bạn muốn tặng cho bạn bè?</span>
                            <i class="fa-solid fa-gift text-[var(--text-secondary)]"></i>
                        </button>
                    </div>

                    <div
                        class="bg-[var(--bg-card)]/60 backdrop-blur-md p-6 rounded-[20px] border border-[var(--border-color)] hover:border-blue-500/30 transition-all duration-300">
                        <h3 class="text-[15px] font-bold mb-4">Tổng đơn hàng</h3>
                        <div class="flex justify-between mb-3 text-[13px] text-[var(--text-secondary)]">
                            <span>Tạm tính</span>
                            <span class="font-medium text-[var(--text-primary)]">{{ formatPrice(subTotal) }}</span>
                        </div>
                        <div class="flex justify-between mb-4 text-[13px] text-[var(--text-secondary)]">
                            <span>Phí</span>
                            <span class="font-medium text-emerald-500">Miễn phí</span>
                        </div>
                        <div class="border-t border-[var(--border-color)] pt-4 flex justify-between items-center">
                            <span class="font-bold text-[14px]">Tổng cộng</span>
                            <span class="text-[18px] font-extrabold text-blue-600">{{ formatPrice(subTotal) }}</span>
                        </div>
                        <button
                            class="mt-6 w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-bold transition-all shadow-md shadow-blue-500/20">
                            Tiến hành thanh toán
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <PaymentMethods />

    <transition name="fade">
        <div v-if="activePopup"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-6 transition-all">
            <div
                class="w-full max-w-md rounded-[20px] bg-[var(--bg-card)] p-6 shadow-2xl border border-[var(--border-color)]">
                <div class="flex items-start justify-between gap-4">
                    <div>
                        <h2 class="text-[15px] font-bold">{{ popupTitle }}</h2>
                        <p class="mt-1.5 text-[12px] text-[var(--text-secondary)]">{{ popupDescription }}</p>
                    </div>
                    <button type="button" @click="closePromoPopup"
                        class="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--bg-app)] text-[var(--text-secondary)] hover:text-rose-500 hover:bg-rose-500/10 transition-colors">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div class="mt-5 space-y-4">
                    <input v-model="promoInput" :placeholder="popupPlaceholder"
                        class="w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-app)] px-4 h-11 text-[13px] text-[var(--text-primary)] outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all" />
                    <div class="flex justify-end gap-3 pt-2">
                        <button type="button" @click="closePromoPopup"
                            class="h-10 px-5 rounded-xl border border-[var(--border-color)] text-[12px] font-medium text-[var(--text-secondary)] hover:bg-[var(--border-color)] transition-colors">
                            Hủy
                        </button>
                        <button type="button" @click="applyPromo"
                            class="h-10 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-[12px] font-bold text-white transition-all shadow-md">
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