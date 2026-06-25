import { computed } from "vue";
import { useAuthStore } from "@/stores/auth.store";
import { useUserStore } from "@/stores/user.store";

export function useAuth() {
  const authStore = useAuthStore();
  const userStore = useUserStore();
  // 1. Trạng thái cơ bản 
  const isAuthenticated = computed(() => authStore.isAuthenticated);
  const user = computed(() => userStore.profile);
  const token = computed(() => authStore.token);
  // ==========================================
  // 2. HÀM LẤY ROLE VÀ KIỂM TRA QUYỀN
  // ==========================================
  // Hàm lấy trực tiếp tên role (Trả về chuỗi rỗng nếu chưa đăng nhập)
  // Dùng Optional Chaining (?.) để tránh lỗi crash app khi user = null
  const userRoleName = computed(() => user.value?.role?.name || "");
  const isStudent = computed(() => userRoleName.value === "student");
  const isTeacher = computed(() => userRoleName.value === "teacher");
  const isAdmin = computed(() => userRoleName.value === "admin");
  // Hàm kiểm tra quyền tổng quát (Truyền vào tên role dạng chuỗi)
  const hasRole = (requiredRoleName) => {
    // Ép về chữ thường để so sánh cho an toàn
    return userRoleName.value.toLowerCase() === requiredRoleName.toLowerCase();
  };
  // ==========================================
  // 3. Quản lý Phiên đăng nhập (Session)
  // ==========================================
  const checkSession = async () => {
    // Chỉ fetch nếu chưa có dữ liệu profile trong Store
    if (isAuthenticated.value && !userStore.profile) {
      await userStore.fetchUserProfile();
    }
  };
  // 4. Đăng xuất (Gom gọn việc xóa cả Token lẫn Profile)
  const logout = () => {
    authStore.logout(); // Xóa token và localStorage
    userStore.$reset(); // Xóa sạch dữ liệu profile, streaks, notifications... trong RAM
  };
  return {
    isAuthenticated,
    user,
    token,
    userRoleName,
    isStudent,
    isTeacher,
    isAdmin,
    hasRole,
    checkSession,
    logout,
  };
}