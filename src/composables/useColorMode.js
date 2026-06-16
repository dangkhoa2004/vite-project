import { ref, onMounted } from 'vue';

const isDark = ref(false);

export const useColorMode = () => {
  const setDarkMode = (value) => {
    isDark.value = value;
    updateDOM();
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
  };

  const toggleDark = () => {
    setDarkMode(!isDark.value);
  };

  const updateDOM = () => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', isDark.value);
    }
  };

  // Đọc state hiện tại từ DOM (main.js đã set)
  onMounted(() => {
    isDark.value = document.documentElement.classList.contains('dark');
  });

  return { isDark, toggleDark, setDarkMode };
};