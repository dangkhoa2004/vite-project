/**
 * @typedef {Object} UserMessage
 * @property {number|string} id - ID của tin nhắn
 * @property {string} user - Tên người gửi
 * @property {string} text - Nội dung chat
 * @property {string} time - Thời gian gửi (HH:mm)
 */

/**
 * @typedef {Object} CourseAttachment
 * @property {number} id - ID tài liệu
 * @property {string} name - Tên file hiển thị
 * @property {string} size - Kích thước file (ví dụ: '2.4 MB')
 * @property {'pdf'|'zip'|'doc'} type - Định dạng file
 * @property {string} url - Link tải file
 */

/**
 * @typedef {Object} LessonInfo
 * @property {string} lessonId - ID bài giảng
 * @property {string} title - Tên bài giảng
 * @property {string} videoUrl - Link HLS/MP4
 * @property {number} duration - Tổng thời gian (giây)
 */

export {} // Export rỗng để file được coi là một module