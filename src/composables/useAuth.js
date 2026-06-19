import { computed } from "vue";
import { useAuthStore } from "@/stores/auth.store";
import { useUserStore } from "@/stores/user.store";

export function useAuth() {
  const authStore = useAuthStore();
  const userStore = useUserStore();

  // 1. Trạng thái cơ bản (Lấy từ Store thông qua computed để luôn tự động cập nhật)
  const isAuthenticated = computed(() => authStore.isAuthenticated);
  const user = computed(() => userStore.profile);
  const token = computed(() => authStore.token);

  // 2. Các hàm kiểm tra Quyền (Phân quyền - Authorization)
  // Giả sử: 1 = Học viên, 2 = Giảng viên, 3 = Admin
  const isStudent = computed(() => user.value?.roleId === 1);
  const isTeacher = computed(() => user.value?.roleId === 2);
  const isAdmin = computed(() => user.value?.roleId === 3);

  // Hàm kiểm tra quyền tổng quát
  const hasRole = (requiredRoleId) => {
    return user.value?.roleId === requiredRoleId;
  };

  // 3. Quản lý Phiên đăng nhập (Session)
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
    // Thuộc tính (Properties)
    isAuthenticated,
    user,
    token,
    isStudent,
    isTeacher,
    isAdmin,

    // Phương thức (Methods)
    hasRole,
    checkSession,
    logout,
    // Lưu ý: Hàm login/register đã nằm gọn trong trang SignIn/SignUp gọi thẳng authStore,
    // ta không cần mang vào đây nữa cho nhẹ file.
  };
}
