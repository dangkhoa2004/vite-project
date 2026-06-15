/**
 * Định dạng số giây thành chuỗi MM:SS (ví dụ: 125 -> "02:05")
 * @param {number} seconds - Tổng số giây
 * @returns {string} Chuỗi thời gian đã định dạng
 */
export const formatVideoTime = (seconds) => {
  if (!seconds || isNaN(seconds)) return '00:00'
  
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = Math.floor(seconds % 60)

  const formattedM = m.toString().padStart(2, '0')
  const formattedS = s.toString().padStart(2, '0')

  if (h > 0) {
    return `${h}:${formattedM}:${formattedS}`
  }
  return `${formattedM}:${formattedS}`
}

/**
 * Định dạng tiền tệ VNĐ
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount)
}