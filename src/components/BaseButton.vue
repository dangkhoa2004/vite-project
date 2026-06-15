<template>
  <button 
    :class="['base-button', variant, { disabled: isLoading }]" 
    :disabled="isLoading || disabled"
    @click="$emit('click')"
  >
    <span v-if="isLoading" class="loader"></span>
    <slot v-else></slot>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary', // 'primary', 'secondary', 'danger'
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
defineEmits(['click'])
</script>

<style scoped>
.base-button {
  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.primary { background-color: #3b82f6; color: white; }
.primary:hover { background-color: #2563eb; }

.secondary { background-color: #374151; color: white; border: 1px solid #4b5563; }
.secondary:hover { background-color: #4b5563; }

.disabled { opacity: 0.6; cursor: not-allowed; }
</style>