// src/composables/useGlobalLoader.js
import { ref } from 'vue'

const isLoading = ref(false)
const loadingText = ref('Đang tải dữ liệu...')

export function useGlobalLoader() {
  const showLoader = (text = 'Đang tải dữ liệu...') => {
    loadingText.value = text
    isLoading.value = true
  }

  const hideLoader = () => {
    isLoading.value = false
  }

  return {
    isLoading,
    loadingText,
    showLoader,
    hideLoader
  }
}