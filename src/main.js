import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './style.css'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
// ĐỌC THEME NGAY LẬP TỨC TRƯỚC KHI MOUNT APP
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
