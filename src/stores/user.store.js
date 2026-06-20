import { defineStore } from "pinia";
import userService from "../services/user.service";

const mapProfileData = (raw) => {
  if (!raw) return null;
  let parsedSkills = [];
  try {
    if (raw.profile?.skills) {
      parsedSkills = typeof raw.profile.skills === 'string' 
        ? JSON.parse(raw.profile.skills) 
        : raw.profile.skills;
    }
  } catch (err) {
    console.warn("Lỗi parse skills từ API:", err);
  }

  return {
    id: raw.id,
    email: raw.email,
    fullName: raw.full_name,
    avatar: raw.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(raw.full_name)}&background=random`,
    phone: raw.phone,
    roleId: raw.role_id,
    headline: raw.profile?.headline || "",
    bio: raw.profile?.bio || "",
    skills: parsedSkills,
    socialLinks: {
      github: raw.profile?.github_url || "",
      linkedin: raw.profile?.linkedin_url || "",
      website: raw.profile?.website_url || "",
    },
    streak: {
      current: raw.streak?.current_streak || 0,
      lastStudyDate: raw.streak?.last_study_date || null,
    }
  };
};

const mapNotificationData = (raw) => ({
    id: raw.id,
    title: raw.title,
    content: raw.content,
    type: raw.type,
    isRead: raw.is_read,
    createdAt: raw.created_at,
});

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
      if (this.profile && !force) return;
      this.isLoading = true;
      this.error = null;
      try {
        const res = await userService.getProfile();
        if (res.status === 'success') {
          const mappedData = mapProfileData(res.data);
          this.profile = mappedData;
          this.streaks = mappedData.streak;
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
      try {
        const res = await userService.getNotifications();
        if (res.status === "success") {
          this.notifications = res.data.map(mapNotificationData);
          this.unreadCount = this.notifications.filter((n) => !n.isRead).length;
        }
      } catch (err) {
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
          await this.fetchUserProfile(true); 
        }
      } catch (err) {
        this.error = "Cập nhật thất bại";
        throw err;
      } finally {
        this.isLoading = false;
      }
    },
    async changePassword(oldPassword, newPassword) {
      this.isLoading = true;
      try {
        const res = await userService.changePassword(oldPassword, newPassword);
        return res.status === 'success';
      } catch (err) {
        this.error = err.response?.data?.message || "Đổi mật khẩu thất bại";
        throw err;
      } finally {
        this.isLoading = false;
      }
    }
  },
});