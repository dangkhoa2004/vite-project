import { ref, onMounted } from 'vue';

// Khai báo ngoài hàm để nó thành biến dùng chung cho toàn ứng dụng
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

  // Khởi tạo giá trị từ localStorage khi trang load
  onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      isDark.value = savedTheme === 'dark';
      updateDOM();
    }
  });

  return { isDark, toggleDark, setDarkMode };
};