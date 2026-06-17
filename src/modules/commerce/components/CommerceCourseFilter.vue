<template>
  <aside class="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[24px] border border-[var(--border-color)] p-5 space-y-7 sticky top-28 custom-scrollbar max-h-[85vh] overflow-y-auto">
      
      <div class="flex items-center justify-between border-b border-[var(--border-color)] pb-4 sticky top-0 z-10 pt-1">
          <h3 class="text-[13px] font-bold text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-2">
              <i class="fa-solid fa-filter text-blue-400"></i> Bộ lọc
          </h3>
          <button @click="$emit('resetFilters')" class="text-[11px] text-[var(--text-secondary)] hover:text-blue-400 transition-colors underline-offset-2 hover:underline">
            Xóa tất cả
          </button>
      </div>

      <div>
          <h4 class="text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-wide mb-3">Đánh giá</h4>
          <div class="flex flex-col gap-3">
              <label v-for="rate in ratings" :key="rate.value" class="flex items-center gap-3 text-[12px] text-[var(--text-secondary)] cursor-pointer hover:text-[var(--text-primary)] group relative">
                  <input type="radio" :value="rate.value" v-model="selectedRating" class="peer sr-only" />
                  <div class="w-4 h-4 rounded-full border border-[var(--border-color)] peer-checked:border-blue-500 peer-checked:bg-blue-500 flex items-center justify-center transition-all bg-[var(--bg-app)]/50 group-hover:border-blue-500/50">
                      <div class="w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all duration-300"></div>
                  </div>
                  
                  <div class="flex items-center text-yellow-500 text-[10px] gap-0.5">
                      <i v-for="i in 5" :key="i" :class="i <= Math.floor(rate.value) ? 'fa-solid fa-star' : 'fa-regular fa-star'"></i>
                      <span class="text-[var(--text-secondary)] ml-1 group-hover:text-[var(--text-primary)] transition-colors">{{ rate.label }}</span>
                  </div>
              </label>
          </div>
      </div>

      <div>
          <h4 class="text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-wide mb-3">Công cụ & Công nghệ</h4>
          <div class="flex flex-col gap-3">
              <label v-for="tool in tools" :key="tool" class="flex items-center gap-3 text-[12px] text-[var(--text-secondary)] cursor-pointer hover:text-[var(--text-primary)] group select-none relative">
                  <input type="checkbox" :value="tool" v-model="selectedTools" class="peer sr-only" />
                  <div class="w-4 h-4 rounded-[4px] border border-[var(--border-color)] bg-[var(--bg-app)]/50 peer-checked:bg-blue-500 peer-checked:border-blue-500 flex items-center justify-center transition-all group-hover:border-blue-500/50">
                      <i class="fa-solid fa-check text-[var(--text-primary)] text-[10px] opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-transform duration-300"></i>
                  </div>
                  <span class="group-hover:text-[var(--text-primary)] transition-colors">{{ tool }}</span>
              </label>
          </div>
      </div>

      <div>
          <h4 class="text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-wide mb-3">Học phí</h4>
          <div class="flex flex-col gap-3">
              <label v-for="price in [{val: 'all', label: 'Tất cả giá'}, {val: 'free', label: 'Miễn phí'}, {val: 'paid', label: 'Có phí'}]" :key="price.val" class="flex items-center gap-3 text-[12px] text-[var(--text-secondary)] cursor-pointer hover:text-[var(--text-primary)] group relative">
                  <input type="radio" :value="price.val" v-model="priceFilter" class="peer sr-only" />
                  <div class="w-4 h-4 rounded-full border border-[var(--border-color)] peer-checked:border-blue-500 peer-checked:bg-blue-500 flex items-center justify-center transition-all bg-[var(--bg-app)]/50 group-hover:border-blue-500/50">
                      <div class="w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all duration-300"></div>
                  </div>
                  <span class="group-hover:text-[var(--text-primary)] transition-colors">{{ price.label }}</span>
              </label>
          </div>
      </div>
  </aside>
</template>

<script setup>
defineProps({
    ratings: { type: Array, required: true },
    tools: { type: Array, required: true }
})
defineEmits(['resetFilters'])

const selectedRating = defineModel('selectedRating')
const selectedTools = defineModel('selectedTools')
const priceFilter = defineModel('priceFilter')
</script>