import { defineStore } from "pinia";
import userService from "../services/user.service";
// ==========================================
// DATA MAPPER (Private Helper)
// ==========================================
const mapProfileData = (raw) => {
  if (!raw) return null;
  return {
    id: raw.id,
    email: raw.email,
    fullName: raw.full_name,
    avatar:
      raw.avatar_url || `https://ui-avatars.com/api/?name=${raw.full_name}`,
    phone: raw.phone,
    roleId: raw.role_id,
    headline: raw.profile?.headline || "",
    bio: raw.profile?.bio || "",
    skills: raw.profile?.skills ? JSON.parse(raw.profile.skills) : [],
    socialLinks: {
      github: raw.profile?.github_url,
      linkedin: raw.profile?.linkedin_url,
      website: raw.profile?.website_url,
    },
  };
};

const mapNotificationData = (raw) => {
  return {
    id: raw.id,
    title: raw.title,
    content: raw.content,
    type: raw.type,
    isRead: raw.is_read,
    createdAt: raw.created_at,
  };
};

// ==========================================
// PINIA STORE
// ==========================================
export const useUserStore = defineStore("user", {
  state: () => ({
    profile: null,
    streaks: { current: 0, lastStudyDate: null },
    notifications: [],
    unreadCount: 0,
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchUserProfile(force = false) {
        // NẾU đã có profile VÀ không ép buộc tải lại (force = false) -> Bỏ qua
        if (this.profile && !force) return;

        this.isLoading = true;
        this.error = null;
        try {
            const res = await userService.getProfile();
            if (res.status === 'success') {
                this.profile = mapProfileData(res.data);
            }
        } catch (err) {
            this.error = 'Không thể tải thông tin cá nhân.';
            console.error(err);
        } finally {
            this.isLoading = false;
        }
    },
    async fetchNotifications() {
      this.isLoading = true;
      this.error = null;
      try {
        const res = await userService.getNotifications();
        if (res.status === "success") {
          this.notifications = res.data.map(mapNotificationData);
          this.unreadCount = this.notifications.filter((n) => !n.isRead).length;
        }
      } catch (err) {
        this.error = "Không thể tải thông báo.";
        console.error(err);
      } finally {
        this.isLoading = false;
      }
    },
    async updateProfile(formData) {
      this.isLoading = true;
      try {
        const res = await userService.updateProfile({
          full_name: formData.name,
          headline: formData.role,
          phone: formData.phone,
          bio: formData.bio,
          skills: JSON.stringify(formData.skills),
          github_url: formData.socials.github,
          linkedin_url: formData.socials.linkedin,
          website_url: formData.socials.website,
        });

        if (res.status === "success") {
          await this.fetchUserProfile();
        }
      } catch (err) {
        this.error = "Cập nhật thất bại";
      } finally {
        this.isLoading = false;
      }
    },
  },
});
