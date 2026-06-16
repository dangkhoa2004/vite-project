<template>
  <div class="relative w-full" ref="dropdownRef">
    <label v-if="label" class="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">
      {{ label }}
    </label>

    <button 
      @click="isOpen = !isOpen"
      type="button"
      class="w-full flex items-center justify-between bg-[var(--bg-app)]/80 border border-white/10 rounded-xl pl-4 pr-3 py-2.5 text-[13px] font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-white/20 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] focus:outline-none focus:border-blue-500/50 text-left"
    >
      <span class="block truncate flex-1 mr-2">{{ currentLabel }}</span>
      <i :class="['fa-solid fa-chevron-down text-[10px] transition-transform duration-300 shrink-0', isOpen ? 'rotate-180' : '']"></i>
    </button>

    <Transition name="dropdown-fade">
      <div v-if="isOpen" class=" left-0 right-0 top-full mt-2 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] overflow-hidden z-[9999] py-1.5 backdrop-blur-xl">
        <ul class="max-h-60 overflow-y-auto">
          <li 
            v-for="option in options" 
            :key="option.value"
            @click="select(option.value)"
            :class="['px-4 py-2.5 text-[13px] cursor-pointer transition-colors flex items-center justify-between',
              modelValue === option.value ? 'text-blue-400 bg-blue-500/10 font-bold' : 'text-[var(--text-secondary)] hover:bg-[var(--border-color)] hover:text-[var(--text-primary)]']"
          >
            {{ option.label }}
            <i v-if="modelValue === option.value" class="fa-solid fa-check text-[12px]"></i>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  modelValue: { type: [String, Number], required: true },
  options: { type: Array, required: true },
  label: { type: String, default: '' }
});

const emit = defineEmits(['update:modelValue']);
const isOpen = ref(false);
const dropdownRef = ref(null);

// Tìm label để hiển thị trên button dựa trên value hiện tại
const currentLabel = computed(() => {
  const option = props.options.find(o => o.value === props.modelValue);
  return option ? option.label : 'Vui lòng chọn...';
});

const select = (value) => {
  emit('update:modelValue', value);
  isOpen.value = false;
};

// Logic đóng khi click ra ngoài
const closeDropdown = (e) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    isOpen.value = false;
  }
};

onMounted(() => document.addEventListener('click', closeDropdown));
onUnmounted(() => document.removeEventListener('click', closeDropdown));
</script>