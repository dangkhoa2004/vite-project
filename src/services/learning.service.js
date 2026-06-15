import api from './api'

export const learningService = {
  // Lấy thông tin phòng học, danh sách video, tài liệu
  getRoomData(courseId) {
    return api.get(`/learning/courses/${courseId}/room-data`)
  },
  
  // Gửi tiến độ học tập (ví dụ: đang xem đến giây thứ 120)
  syncProgress(courseId, lessonId, currentTime) {
    return api.post(`/learning/progress`, {
      courseId,
      lessonId,
      currentTime
    })
  }
}