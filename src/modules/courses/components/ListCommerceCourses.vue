<template>
    <div :class="['group flex bg-[#1c1e24]/60 backdrop-blur-md rounded-[20px] border border-white/5 overflow-hidden hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgba(59,130,246,0.08)] transition-all duration-300',
                 layout === 'list' ? 'flex-col md:flex-row p-4 gap-6' : 'flex-col p-3 gap-4 h-full']">
        
        <div :class="['rounded-xl overflow-hidden shrink-0 relative border border-white/5 group transform-gpu bg-[#0f1115]', 
                      layout === 'list' ? 'w-full md:w-56 h-40' : 'w-full h-44']">
            <img :src="course.thumbnail" :alt="course.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
            
            <div class="absolute top-2 left-2 z-20 flex flex-col gap-1.5 pointer-events-none">
                <span v-for="badge in course.badges" :key="badge" 
                      :class="['px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white rounded shadow-sm', 
                               badge === 'Bán chạy' ? 'bg-red-500' : badge === 'Mới' ? 'bg-emerald-500' : 'bg-blue-600']">
                    {{ badge }}
                </span>
            </div>

            <button class="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-black/40 hover:bg-rose-500 backdrop-blur-md rounded-full text-gray-300 hover:text-white transition-all z-20">
                <i class="fa-regular fa-heart text-[13px]"></i>
            </button>

            <div class="absolute inset-0 bg-[#0f1115]/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 flex flex-col justify-center z-10 rounded-xl">
                <p class="text-[11px] font-bold text-white mb-2 border-b border-white/10 pb-1.5 uppercase tracking-wider">Bạn sẽ học được:</p>
                <ul class="text-[11px] text-gray-300 space-y-1.5">
                    <li v-for="(item, idx) in course.whatYouWillLearn" :key="idx" class="flex gap-2 items-start">
                        <i class="fa-solid fa-check text-emerald-500 mt-0.5 text-[9px]"></i> 
                        <span class="line-clamp-2 leading-tight">{{ item }}</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="flex-1 flex flex-col justify-between min-w-0 py-1">
            <div>
                <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center text-yellow-500 text-[11px] gap-0.5">
                        <i class="fa-solid fa-star"></i>
                        <span class="text-gray-200 font-bold ml-1">{{ course.rating }}</span>
                        <span class="text-gray-500 ml-1">({{ course.reviews }})</span>
                    </div>
                    <span class="text-[10px] font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                        {{ course.level }}
                    </span>
                </div>

                <h3 class="text-[15px] font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {{ course.title }}
                </h3>
                
                <p v-if="layout === 'list'" class="text-[12px] text-gray-400 line-clamp-2 leading-relaxed mb-3">
                    {{ course.description }}
                </p>

                <div class="flex flex-wrap gap-1.5 mb-3">
                    <span v-for="tool in course.tools" :key="tool" class="text-[9px] text-gray-400 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded">
                        {{ tool }}
                    </span>
                </div>
            </div>

            <div :class="['flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-white/5', layout === 'grid' ? 'mt-auto' : '']">
                <div class="flex items-center gap-2">
                    <img :src="course.instructor.avatar" class="w-6 h-6 rounded-full object-cover border border-white/10" />
                    <span class="text-[11px] font-medium text-gray-300">{{ course.instructor.name }}</span>
                </div>
                <div class="flex items-center gap-3">
                    <span title="Học viên" class="flex items-center gap-1.5"><i class="fa-solid fa-users text-[10px]"></i> {{ course.students }}</span>
                </div>
            </div>
        </div>

        <div :class="['flex justify-between items-center gap-3 border-white/5', 
                     layout === 'list' ? 'w-full md:w-40 flex-row md:flex-col justify-between md:justify-center items-center md:items-end md:pl-5 md:border-l' : 'flex-row pt-3 border-t']">
            <div :class="['flex flex-col', layout === 'list' ? 'text-left md:text-right' : 'text-left']">
                <span v-if="course.price > 0" class="text-[11px] text-gray-500 line-through mb-0.5">
                    {{ formatPrice(course.price * 1.3) }}
                </span>
                <span :class="['text-[15px] font-extrabold tracking-wide leading-none', course.price === 0 ? 'text-emerald-400' : 'text-white']">
                    {{ course.price === 0 ? 'Miễn phí' : formatPrice(course.price) }}
                </span>
            </div>

            <div class="flex gap-2">
                <button title="Thêm vào giỏ" class="w-9 h-9 flex items-center justify-center bg-white/5 hover:bg-blue-600 text-gray-300 hover:text-white rounded-xl border border-white/10 transition-colors">
                    <i class="fa-solid fa-cart-plus text-[13px]"></i>
                </button>
                <a :href="`/chi-tiet-khoa-hoc`" class="px-4 h-9 bg-blue-600 hover:bg-blue-500 text-white text-[12px] font-bold rounded-xl transition-all shadow-md flex items-center gap-1.5">
                    Chi tiết
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    course: { type: Object, required: true },
    layout: { type: String, default: 'list' } 
})

const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
}
</script>