import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'

export const useLearningStore = defineStore('learning', () => {
  const activeLearners = ref(86)

  // Mục lục các bài học
  const lessons = reactive([
    { id: 1, title: 'Bài 1: Tổng quan về kiến trúc', type: 'slide' },
    { id: 2, title: 'Bài 2: Phân tích UI/UX', type: 'slide' },
    { id: 3, title: 'Bài 3: Kết nối API', type: 'slide' }
  ])

  // Bài học hiện tại đang xem
  const currentLesson = ref(lessons[0])

  // Lưu trữ TẤT CẢ tin nhắn của khóa học
  const allMessages = reactive([
    { id: 1, lessonId: 1, user: 'Minh Tuấn', text: 'Slide phần này làm rõ ràng quá!', time: '10:00' },
    { id: 2, lessonId: 1, user: 'Hải Yến', text: 'Cho em hỏi thêm về sơ đồ luồng ạ.', time: '10:05' },
    { id: 3, lessonId: 2, user: 'Khoa', text: 'Màu nền của slide này mã hex là bao nhiêu vậy?', time: '10:20' }
  ])

  // Lọc tin nhắn chỉ hiển thị theo bài học hiện tại
  const messages = computed(() => 
    allMessages.filter(m => m.lessonId === currentLesson.value.id)
  )

  const attachments = reactive([
    { id: 1, name: 'Slide_Giang_Day.pdf', size: '2.4 MB', type: 'pdf' },
    { id: 2, name: 'Source_Code.zip', size: '15 MB', type: 'zip' }
  ])

  const addMessage = (text) => {
    allMessages.push({
      id: Date.now(),
      lessonId: currentLesson.value.id, // Gắn ID bài học hiện tại vào tin nhắn
      user: 'Khoa',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    })
  }

  const changeLesson = (lessonId) => {
    const found = lessons.find(l => l.id === lessonId)
    if (found) currentLesson.value = found
  }

  return { 
    activeLearners, 
    lessons, 
    currentLesson, 
    messages, 
    attachments, 
    addMessage, 
    changeLesson 
  }
})