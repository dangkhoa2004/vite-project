import apiClient from "./api.service";

const userService = {
  getProfile() {
    return apiClient.get("/users/profile");
  },

  updateProfile(data) {
    return apiClient.put("/users/profile", data);
  },

  changePassword(oldPassword, newPassword) {
    return apiClient.put("/users/change-password", { 
      old_password: oldPassword, 
      new_password: newPassword 
    });
  },

  getNotifications() {
    return apiClient.get("/notifications");
  }
};

export default userService;